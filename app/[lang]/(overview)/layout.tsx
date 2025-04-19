import { LayoutMain } from "@/components/layout/root-layout";
import UserButton from "@/lib/authentication/user-button";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="fixed bottom-4 left-4 z-50 transition-transform hover:scale-110">
                <UserButton />
            </div>
            <LayoutMain >
                {children}
            </LayoutMain>
        </>
    );
}