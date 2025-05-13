import type { Metadata } from "next";
import ClientBody from "app/[locale]/ClientBody";
import { FontProvider } from "@/context/FontContext";
import { TanStackQueryProvider } from "@/lib/tanstack-query";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hackhub.io - Inspiration for Geeks",
  description:
    "A platform for developers to connect, collaborate, and create amazing projects together.",
  icons: {
    icon: "/favicon.ico",
  },
};


export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "az" }, { locale: "ru" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const messages = await getMessages();
  console.log(locale,"locale");
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
    <TanStackQueryProvider>
        <FontProvider>
          <ClientBody>{children}</ClientBody>
        </FontProvider>
    </TanStackQueryProvider>
    </NextIntlClientProvider>

  );
}
