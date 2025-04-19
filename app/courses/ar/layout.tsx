import CanonicalHead from "@/components/Canonicalhead";
import { MainLayout } from "@/components/layout/main-layout";
import UserButton from "@/lib/authentication/user-button";

export default async function ArabicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div dir="rtl" className="min-h-screen font-ar">
            <MainLayout>
                <CanonicalHead />
                {children}
                <div className="fixed bottom-4 right-4 z-50 transition-transform hover:scale-110">
                    <UserButton />
                </div>
            </MainLayout>
        </div>
    );
}