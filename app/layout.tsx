import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import './globals.css';
import './stylemain.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Learn Web Development | Barmajah Academy',
    description:
        'Learn web development in Arabic and English with Barmajah Academy. Courses on HTML, CSS, JavaScript, PHP, SQL, Symfony, and more.',
    keywords: [
        'learn web development',
        'web development course',
        'learn HTML CSS JavaScript',
        'developer course',
        'formation développeur web',
        'apprendre le développement web',
        'تعلم تطوير الويب  ',
        'دورة برمجة',
        'كورس برمجة',
        'Barmajah Academy',
        'apprendre à coder',
        'become a fullstack developer',
        'online coding course',
        'coding for beginners'
    ],
    openGraph: {
        title: 'Barmajah Academy – Learn Web Development',
        description: 'Online courses to become a fullstack developer in Arabic and English.',
        url: 'https://barmajah-academy.com',
        siteName: 'Barmajah Academy',
        images: [
            {
                url: '/Barmajah-Academy-icon.png',
                width: 800,
                height: 600,
                alt: 'Barmajah Academy Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    icons: {
        icon: '/Barmajah-Academy-icon.png',
    },
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