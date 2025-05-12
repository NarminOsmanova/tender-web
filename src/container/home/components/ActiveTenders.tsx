"use client"

import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // useCarousel,
} from "@/shared/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { mockTenders } from "@/data/tenders"
import { ChevronRight, Clock4, Eye, Hourglass, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/shared/components/ui/button"
import { useTranslations } from "next-intl";

export function ActiveTenders() {
    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: false })
    )
    const pathname = usePathname();
    const isOnTenderPage = pathname.startsWith('/tender/');
    const isOnCartPage = pathname.startsWith('/cart');
    const router = useRouter()
    const t = useTranslations("activeTenders");
    return (
        <section className="py-10 md:py-20 w-full">
            <div className="container relative">
                <div className="text-center mb-16">
                    <span className="inline-block text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-2xl font-medium mb-4">
                        {t("subtitle")}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-medium text-zinc-900">
                        {t("title")}
                    </h2>
                </div>

                <div className="relative flex flex-col items-center gap-8">

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[plugin.current]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {mockTenders
                                .filter(tender => tender.status === 'Davam edir')
                                .map((tender, index) => (
                                    <CarouselItem key={index} className="pl-4 basis-1/1 md:basis-1/2 lg:basis-1/2 md:h-[340px]">

                                        <div
                                            key={tender.id}
                                            className="p-6 max-w-[400px] sm:max-w-max h-full rounded-lg bg-[#FAFBFF] border border-gray-200 hover:bg-[linear-gradient(270deg,_#EAFFFC_0%,_#FFFFFF_100%)] transition-colors duration-200 flex flex-col gap-4"
                                        >
                                            {/* Company Info (Left - Stacked) */}
                                            <div className=" gap-4 flex-col md:flex-row">
                                                <div className="flex flex-col items-start mb-4 sm:items-start text-center sm:text-left w-full sm:w-auto flex-shrink-0 sm:max-w-[150px] min-w-[240px]">
                                                    <Image
                                                        src={tender.companyLogo}
                                                        alt={tender.companyName}
                                                        width={64}
                                                        height={64}
                                                        className="rounded-full mb-2 object-cover"
                                                        unoptimized
                                                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = '/GrandmartLogo.svg'; }}
                                                    />
                                                    <span className="font-medium text-zinc-900 break-words">{tender.companyName}</span>
                                                </div>

                                                {/* Main Content (Right) */}
                                                <div className="flex-1 flex flex-col z-10">
                                                    <div className="flex justify-between items-start mb-4 flex-col-reverse gap-2">
                                                        <h3 className="text-[16px] font-semibold text-zinc-900 cursor-pointer max-w-[320px] sm:max-w-[400px] md:max-w-max" onClick={() => { router.push(`/tender/${tender?.slug}`) }}>{tender.title}</h3>
                                                        {/* <Badge
                                                            variant={tender.status === "Tamamlanmış" ? "default" : "secondary"}
                                                            className={`${tender.status === "Tamamlanmış" ? 'bg-teal-100 text-teal-700' : 'bg-orange-100 text-orange-700'} whitespace-nowrap flex-shrink-0`}
                                                        >
                                                            {tender.status}
                                                        </Badge> */}
                                                    </div>

                                                    <p className="text-sm text-zinc-600 mb-4 line-clamp-2 max-w-[320px] sm:max-w-[400px] md:max-w-max">{tender.description}</p>
                                                    {(!isOnTenderPage && !isOnCartPage) && (
                                                        <Link href={`/login`} className="text-sm hover:underline flex items-center gap-1">
                                                            Ətraflı <ChevronRight className="w-4 h-4" />
                                                        </Link>
                                                    )}

                                                </div>
                                            </div>
                                            <div className="flex flex-wrap justify-start md:justify-between w-full gap-x-4 gap-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-gray-100">
                                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#009A85]" /> {tender.location}</span>
                                                <span className="flex items-center gap-1"><Clock4 className="w-3 h-3 text-[#009A85]" /> {tender.postedAgo}</span>
                                                <span className="flex items-center gap-1"><Hourglass className="w-3 h-3 text-[#009A85]" /> {tender.deadline}</span>
                                                <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3 text-[#009A85]" /> {tender.bids}</span>
                                                <span className="flex items-center gap-1"><Eye className="w-3 h-3 text-[#009A85]" /> {tender.views}</span>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                    </Carousel>
                    <Button className="bg-zinc-900 hover:bg-zinc-800 text-white w-[160px]" onClick={() => router.push("/login")}>
                        {t("button")}
                    </Button>
                </div>
            </div>
        </section>
    )
}
