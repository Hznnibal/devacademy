// app/pricing/layout.tsx
import { Toaster } from "sonner";

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Toaster
                richColors
                position="top-center"
                toastOptions={{
                    style: {
                        backgroundColor: "#111",
                        color: "#fff",
                        fontSize: "16px",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    },

                }}
            />
            {children}
        </div>
    );
}
