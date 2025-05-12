"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";



export default function Features() {
  const t = useTranslations("network");
  const supermarkets = [
    {
      id: 1,
      logo: "/Megastore.svg",
      title: t("megastore"),
      description: t("megadescription"),
      link: "https://www.megastore.market/"
    },
    {
      id: 2,
      logo: "/Bolmart.svg",
      title: t("bolmart"),
      description: t("bolmartdescription"),
      link: "https://www.bolmart.az/",
    },
    {
      id: 3,
      logo: "/Grandmart.svg",
      title: t("grandmart"),
      description: t("grandmartdescription"),
      link: "https://www.grandmartsupermarket.com/"
    },
    {
      id: 4,
      logo: "/Novashome.svg",
      title: t("novashome"),
      description: t("novashomedescription"),
      link: "https://www.novas-home.com/"
    }
  ];
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-2xl font-medium mb-4">
            {t("subtitle")}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
          {supermarkets.map((market) => (
            <div
              key={market.id}
              className="relative bg-white rounded-2xl p-6 group hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#EAFFFC] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="h-12 mb-4">
                  <Image
                    src={market.logo}
                    alt={market.title}
                    width={160}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                    {market.title}
                  </h3>
                  <p className="text-zinc-600 mb-4">
                    {market.description}
                  </p>
                </div>
                <Link
                  href={market.link}
                  target="_blank"
                  className="inline-flex items-center text-zinc-900 font-medium hover:text-teal-600 transition-colors"
                >
                  {t("link")}
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
