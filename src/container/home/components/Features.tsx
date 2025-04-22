"use client";

import Image from "next/image";
import Link from "next/link";

const supermarkets = [
  {
    id: 1,
    logo: "/Megastore.svg",
    title: "Megastore supermarketlər şəbəkəsi",
    description: "Azərbaycan Respublikasında hazırda 21 mağaza ilə fəaliyyət göstərən Megastore marketlər şəbəkəsi 2010-cu ildə təsis edilmişdir.",
    link: "https://www.megastore.market/"
  },
  {
    id: 2,
    logo: "/Bolmart.svg",
    title: "Bolmart supermarketlər şəbəkəsi",
    description: "Azərbaycan pərakəndə bazarında 20 ilə yaxındır fəaliyyət göstərən Bolmart supermarketlər şəbəkəsi hazırda 50-yə yaxın filialla müştərilərin ixtiyarındadır.",
    link: "https://www.bolmart.az/",
  },
  {
    id: 3,
    logo: "/Grandmart.svg",
    title: "Grandmart supermarketlər şəbəkəsi",
    description: "Azərbaycan pərakəndə bazarında 20 ilə yaxındır fəaliyyət göstərən Grandmart supermarketlər şəbəkəsi hazırda 30-dan çox filialla müştərilərin ixtiyarındadır.",
    link: "https://www.grandmartsupermarket.com/"
  },
  {
    id: 4,
    logo: "/Novashome.svg",
    title: "Novas Home",
    description: "Novas Home 2019-cu il tarixindən fəaliyyətə başlamışdır. Brendin filialları bizim market mağazalarında yerləşir. Qısa zaman ərzində Novas Home konsepsiyası yeni filiallarda genişlənmişdir.",
    link: "https://www.novas-home.com/"
  }
];

export default function Features() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-lg font-medium mb-4">
            Şəbəkəmiz
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900">
            Supermarketlər şəbəkəmiz
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
                  Sayta keç
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
