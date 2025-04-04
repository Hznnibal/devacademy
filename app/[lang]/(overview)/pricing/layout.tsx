import { Toaster } from "sonner";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
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
    );
}
