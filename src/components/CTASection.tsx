'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export function CTASection() {
  const router = useRouter();
  return (
    <section className="container relative w-full overflow-hidden">
      <Image src="/Background.svg" alt="CTA background" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full opacity-50" />
      <Image src="/CTABackground.svg" alt="CTA background" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full opacity-50" />
      <div className="relative z-10 mx-auto px-4 py-[120px] text-center">
        <h2 className="text-2xl md:text-4xl font-medium text-zinc-900 mb-4">
          Elə indi təklif verməyə başlayın
        </h2>
        <p className="text-lg text-zinc-600 mb-8">
          Hesabınıza daxil olaraq tenderdə iştirak edə bilərsiniz
        </p>
        <Button className="bg-zinc-900 hover:bg-zinc-800 text-white z-50 w-[160px]" onClick={() => router.push("/login")}>
          Daxil ol
        </Button>
      </div>
    </section>
  )
}