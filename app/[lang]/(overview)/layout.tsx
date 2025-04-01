import "@/app/globals.css";
import '@/app/stylemain.css';
import { LayoutMain } from "@/components/layout/root-layout";
import UserButton from "@/lib/authentication/user-button";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider>
            <div className="fixed bottom-4 left-4 z-50 transition-transform hover:scale-110">
                <UserButton />
            </div>
            <LayoutMain >
                {children}
            </LayoutMain>
        </SessionProvider>
    );
}