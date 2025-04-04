"use client";

import '@/app/style.css';
import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";

export default function AppLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const [messages, setMessages] = useState<any>(null);
    const [error, setError] = useState(false);
    const [lang, setLang] = useState<string>('');
    const [darkMode] = useState<boolean>(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMessages() {
            try {
                const { lang } = await params;
                setLang(lang);

                if (['en', 'fr', 'ar'].includes(lang)) {
                    const messages = await import(`@/app/locales/${lang}.json`);
                    setMessages(messages);
                    setLoading(false);
                } else {
                    setError(true);
                    setLoading(false);
                }
            } catch (error: unknown) {
                console.error(error);
                setError(true);
                setLoading(false);
            }
        }

        loadMessages();
    }, [params]);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    if (loading) {
        return null;
    }

    if (error || !messages) {
        return <div>Language not supported or messages failed to load</div>;
    }

    return (
        <NextIntlClientProvider locale={lang} messages={messages}>
            <div className="min-h-screen bg-background">
                {children}
            </div>
        </NextIntlClientProvider>
    );
}
