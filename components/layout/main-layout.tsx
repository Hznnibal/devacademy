'use client';

import { NextIntlClientProvider } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SidebarAr } from "../sidenav/SideNavAr/sidebar";
import { SidebarEn } from "../sidenav/SideNavEn/sidebar";
import { NavbarMain } from './navbar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [messages, setMessages] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      if (pathname.startsWith('/courses/ar')) {
        setLanguage('ar');
      } else if (pathname.startsWith('/courses/en')) {
        setLanguage('en');
      }

      try {
        const lang = pathname.startsWith('/courses/ar') ? 'ar' : 'en';
        const messages = await import(`@/app/locales/${lang}.json`);
        setMessages(messages);
      } catch (error: unknown) {
        console.error(error);
        setError(true);
      }
    };

    loadMessages();
  }, [pathname]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);

    const route = newLanguage === 'ar' ? '/courses/ar/intro/intro/introduction' : '/courses/en/intro/intro/introduction';
    router.push(route);
  };

  if (error || !messages) {
    return <div>Language not supported or messages failed to load</div>;
  }

  return (
    <NextIntlClientProvider locale={language} messages={messages}>
      <div className="min-h-screen flex flex-col">
        <NavbarMain toggleLanguage={toggleLanguage} currentLanguage={language} />
        <div className="flex pt-6 px-6 w-full mt-16">
          {language === 'en' ? <SidebarEn /> : <SidebarAr />}
          <main className="flex-1 ml-1/4 px-6 rounded-lg bg-background overflow-y-auto ">
            {children}
          </main>
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
