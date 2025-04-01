"use client";

import Settings from "@/lib/settings";
import { GraduationCap, Menu } from "lucide-react";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavbarMain({
    toggleLanguage,
    currentLanguage,
}: {
    toggleLanguage: () => void;
    currentLanguage: 'en' | 'fr' | 'ar';
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const t = useTranslations('navigation');
    const pathname = usePathname();
    const lang = pathname.includes('/ar') ? 'ar' : pathname.includes('/en') ? 'en' : 'fr';

    const navItems = [
        { label: t('program'), href: `/${lang}/programme` },
        { label: t('pricing'), href: `/${lang}/pricing` },
        { label: t('contact'), href: `/${lang}/contact` },
    ];

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            setDarkMode(false);
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

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

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-6 w-6" />
                        <Link href={`/${lang}`} className="text-xl font-bold">
                            {t('title')}
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center md:gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Settings toggleLanguage={toggleLanguage} currentLanguage={currentLanguage} />
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={t('toggleMenu')}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="border-t py-4 md:hidden">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
