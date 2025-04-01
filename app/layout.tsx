import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import './globals.css';
import './stylemain.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Dev Academy',
    description: 'Formation complète pour devenir développeur web professionnel',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider>
            <html>
                <body className={inter.className}>
                    <main>{children}</main>
                </body>
            </html>
        </SessionProvider>
    );
}

