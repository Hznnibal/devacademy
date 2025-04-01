'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavbarMain } from './navbar';

export function LayoutMain({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [language, setLanguage] = useState<'en' | 'ar'>('en');

    useEffect(() => {
        if (pathname.startsWith('/ar')) {
            setLanguage('ar');
        } else if (pathname.startsWith('/en')) {
            setLanguage('en');
        }
    }, [pathname]);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'ar' : 'en';
        setLanguage(newLanguage);

        const route = newLanguage === 'ar' ? '/ar' : '/en';
        router.push(route);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <NavbarMain toggleLanguage={toggleLanguage} currentLanguage={language} />
            <main className="flex-1 ml-1/4 px-6 rounded-lg bg-background overflow-y-auto ">
                {children}
            </main>
        </div>
    );
}
