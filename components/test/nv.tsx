"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "Accueil", href: "/" },
        { label: "Formation", href: "/formation" },
        { label: "Tarifs", href: "/tarifs" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-xl font-bold">
                        WebMaster
                    </Link>

                    {/* Desktop Menu */}
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
                        <Button size="sm">Commencer</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
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
                            <div className="px-4 pt-2">
                                <Button className="w-full" size="sm">
                                    Commencer
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}