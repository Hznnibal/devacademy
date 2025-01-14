'use client'

import { useState } from "react";
import { SidebarAr } from "../SideNavAr/sidebar"; // Si vous avez un SideNav en arabe
import { SidebarEn } from "../SideNavEn/sidebar";
import { Navbar } from "./navbar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'ar'>('en'); // Initialisation en anglais

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en'); // Bascule entre anglais et arabe
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleLanguage={toggleLanguage} currentLanguage={language} />
      <div className="flex pt-6 px-6 w-full mt-16">
        {language === 'en' ? <SidebarEn /> : <SidebarAr />}
        <main className="flex-1 ml-1/4 px-6 rounded-lg bg-background overflow-y-auto ">
          {children}
        </main>
      </div>
    </div>
  );
}
