// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "@/app/globals.css";
// import ClientBody from "@/app/ClientBody";
// import { barlow,youtube_sans } from "../fonts";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "Hackhub.io - Inspiration for Geeks",
//   description:
//     "A platform for developers to connect, collaborate, and create amazing projects together.",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={barlow.className}>
//       <body className={`min-h-screen bg-white ${barlow.className} `} cz-shortcut-listen="true">
//         <ClientBody>{children}</ClientBody>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "@/app/globals.css";
import ClientBody from "@/app/ClientBody";
import { FontProvider } from "@/context/FontContext";
import { TanStackQueryProvider } from "@/lib/tanstack-query";

export const metadata: Metadata = {
  title: "Hackhub.io - Inspiration for Geeks",
  description: "A platform for developers to connect, collaborate, and create amazing projects together.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TanStackQueryProvider>
      <FontProvider>
        <ClientBody>{children}</ClientBody>
      </FontProvider>
    </TanStackQueryProvider>
  );
}
