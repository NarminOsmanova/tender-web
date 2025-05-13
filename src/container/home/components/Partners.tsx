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
import { useTranslations } from "next-intl"
import { usePartners } from "@/lib/hooks/usePartners"


export function Partners() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  )
  const t = useTranslations("partners");
  
  const { data: partners, isLoading, error } = usePartners();
  
  if (isLoading) {
    return (
      <section className="py-10 md:py-20 bg-white max-w-[880px] w-full mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10 md:py-20 bg-white max-w-[880px] w-full mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">Error loading Partners</div>
        </div>
      </section>
    );
  }
  console.log(partners, "partners")
  return (
    <section className="py-10 md:py-20 bg-[#FAFBFF] w-full">
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-2xl font-medium mb-4">
            {t("subtitle")}
          </span>
          <h2 className="text-2xl md:text-4xl font-medium text-zinc-900">
            {t("title")}
          </h2>
        </div>

        <div className="relative">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 w-[16.666%] h-full z-10 pointer-events-none bg-gradient-to-r from-[#FAFBFF] to-transparent" />
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 w-[16.666%] h-full z-10 pointer-events-none bg-gradient-to-l from-[#FAFBFF] to-transparent" />

          <Carousel
            opts={{
              align: "start",
              // loop: true,
            }}
            // plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners && [...partners, ...partners].map((partner, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="rounded-lg bg-white p-4 w-[160px] h-[100px]" >
                    <Image
                      src={partner?.img}
                      alt={"partner"}
                      width={160}
                      height={80}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
