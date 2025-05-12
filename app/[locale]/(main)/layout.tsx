import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
// import "@/app/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}