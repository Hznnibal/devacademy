import { MainLayout } from "@/components/layout/main-layout";
import UserButton from "@/lib/authentication/user-button";
import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider>
            <MainLayout >
                {children}
                <div className="fixed bottom-4 left-4 z-50 transition-transform hover:scale-110">
                    <UserButton />
                </div>
            </MainLayout>
        </SessionProvider>
    );
}
