"use client";

import { Button } from "@/shared/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center overflow-hidden">
      {/* Desktop background */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          width={1920}
          height={1080}
          src="/Herodesktop.svg"
          alt="Hero background"
          className="w-full h-full object-cover"
          priority
        />
        <div 
          className="absolute inset-0 backdrop-blur-[240px]"
          style={{ 
            background: '#FFFFFF33',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' width='100' height='100' viewBox='0 0 100 100' patternUnits='userSpaceOnUse'%3E%3Cline x1='0' y1='0' x2='100' y2='100' stroke='%23FFFFFF08' stroke-width='0.5'/%3E%3Cline x1='100' y1='0' x2='0' y2='100' stroke='%23FFFFFF08' stroke-width='0.5'/%3E%3Cline x1='50' y1='0' x2='50' y2='100' stroke='%23FFFFFF08' stroke-width='0.5'/%3E%3Cline x1='0' y1='50' x2='100' y2='50' stroke='%23FFFFFF08' stroke-width='0.5'/%3E%3Cline x1='25' y1='0' x2='75' y2='100' stroke='%23FFFFFF05' stroke-width='0.25'/%3E%3Cline x1='75' y1='0' x2='25' y2='100' stroke='%23FFFFFF05' stroke-width='0.25'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3C/svg%3E")`,
            opacity: 0.8
          }}
        ></div>
      </div>
      
      {/* Mobile background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          width={390}
          height={700}
          src="/Heromobile.svg"
          alt="Hero background"
          className="w-full h-full object-cover"
          priority
        />
        <div 
          className="absolute inset-0 backdrop-blur-[240px]"
          style={{ 
            background: '#FFFFFF33',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' width='100' height='100' viewBox='0 0 100 100' patternUnits='userSpaceOnUse'%3E%3Cline x1='0' y1='0' x2='100' y2='100' stroke='%23FFFFFF08' stroke-width='0.5'/%3E%3Cline x1='100' y1='0' x2='0' y2='100' stroke='%23FFFFFF08' stroke-width='0.5'/%3E%3Cline x1='50' y1='0' x2='50' y2='100' stroke='%23FFFFFF08' stroke-width='0.5'/%3E%3Cline x1='0' y1='50' x2='100' y2='50' stroke='%23FFFFFF08' stroke-width='0.5'/%3E%3Cline x1='25' y1='0' x2='75' y2='100' stroke='%23FFFFFF05' stroke-width='0.25'/%3E%3Cline x1='75' y1='0' x2='25' y2='100' stroke='%23FFFFFF05' stroke-width='0.25'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3C/svg%3E")`,
            opacity: 0.8
          }}
        ></div>
      </div>
      
      <div className="absolute top-56 left-1/2 -translate-x-1/2 z-10 container mx-auto px-4 text-center">
        <div className="space-y-8">
          <span className="inline-block text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-sm font-medium">
            Biz kimik?
          </span>
          
          <h1 className="text-2xl md:text-5xl lg:text-[56px] font-bold text-zinc-900 tracking-tight">
            Tenderlik və mükəmməllik:
            <br />
            <span className="text-zinc-800">İstədiyiniz hər şey bir yerdə</span>
          </h1>
          
          <p className="text-zinc-600 text-lg max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Urna condimentum at id eu. Et est dignissim tristique integer nullam fringilla. Sed in scelerisque ornare nullam nibh sit. Porttitor facilisis imperdiet amet elementum laoreet lectus risus.
          </p>
          
          <div className="mt-10">
            <Button className="bg-white hover:bg-zinc-50 text-zinc-900 px-8 py-6 text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-200">
              İndi təklif ver
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
