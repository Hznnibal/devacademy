import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import './stylemain.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Barmajah Academy',
    description: 'Complete Training to Become a Professional Web Developer',
    icons: {
        icon: "/barmajahicon.png",
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
                    <Toaster
                        richColors
                        position="top-center"
                        toastOptions={{
                            style: {
                                backgroundColor: "#111111",
                                color: "#fff",
                                fontSize: "18px",
                                padding: "12px 20px",
                                borderRadius: "8px",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                            },
                        }}
                    />
                </body>
            </html>
        </SessionProvider>
    );
}

