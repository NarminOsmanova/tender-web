import "@/app/globals.css";
import ClientBody from "@/app/ClientBody";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <ClientBody>{children}</ClientBody>
            <Footer />
        </>


    );
}
