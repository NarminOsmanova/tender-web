import "@/app/globals.css";
import ClientBody from "@/app/ClientBody";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <ClientBody>{children}</ClientBody>
            <Footer />
        </>


    );
}
