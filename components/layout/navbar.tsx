'use client';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { GraduationCap, Moon, Sun, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/learning-path", label: "Parcours d'apprentissage" },
  { href: "/achievements", label: "Mes réussites" },
  { href: "/community", label: "Communauté" },
  { href: "/resources", label: "Ressources" },
];

export function Navbar({ toggleLanguage, currentLanguage }: { toggleLanguage: () => void, currentLanguage: 'en' | 'ar' }) {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const router = useRouter();

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguageAndRedirect = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    toggleLanguage(); // Mise à jour de la langue

    // Redirige vers la page dans la langue correcte
    router.push(newLanguage === 'ar' ? "/ar/intro/intro/introduction" : "/en/intro/intro/introduction");
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm border-b fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1800px] mx-auto">
        <div className="h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              DevAcademy
            </Link>
          </div>

          <nav className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Mon profil</DropdownMenuItem>
                <DropdownMenuItem>Progression</DropdownMenuItem>
                <DropdownMenuItem>Certificats</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  Déconnexion
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={toggleDarkMode} className="flex items-center gap-2">
                  {darkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </DropdownMenuItem>

                <DropdownMenuItem onClick={changeLanguageAndRedirect} className="flex items-center gap-2">
                  {currentLanguage === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
