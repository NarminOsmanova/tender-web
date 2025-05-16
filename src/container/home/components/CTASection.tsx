'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/components/ui/button';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
export function CTASection() {
  const router = useRouter();
  const t = useTranslations("cta");
  const locale = useLocale()
  return (
    <section className="container relative w-full overflow-hidden">
      <Image src="/Background.svg" alt="CTA background" fill objectFit="cover" className="absolute inset-0 w-full h-full opacity-50" />
      <Image src="/CTABackground.svg" alt="CTA background" fill objectFit="cover" className="absolute inset-0 w-full h-full opacity-50" />
      <div className="relative z-10 mx-auto px-4 py-[120px] text-center">
        <h2 className="text-2xl md:text-4xl font-medium text-zinc-900 mb-4">
         {t("title")}
        </h2>
        <p className="text-lg text-zinc-600 mb-8">
        {t("description")}
        </p>
        <Button className="bg-zinc-900 hover:bg-zinc-800 text-white z-50 w-[160px]" onClick={() => router.push(`/${locale}/login`)}>
          {t("button")}
        </Button>
      </div>
    </section>
  )
}