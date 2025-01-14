import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './stylemain.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Formation Développement Web',
    description: 'Formation complète pour devenir développeur web professionnel',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="">{children}</main>
            </body>
        </html>
    );
}