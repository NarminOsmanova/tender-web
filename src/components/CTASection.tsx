import React from 'react'
import Image from 'next/image'

export function CTASection() {
  return (
    <section className="container relative w-full overflow-hidden">
      <Image src="/Background.svg" alt="CTA background" width={508} height={500} className="absolute inset-y-0 left-0 w-full h-full object-cover opacity-50" />
      <div className=" mx-auto px-4 py-[120px] text-center">
        <h2 className="text-2xl md:text-4xl font-medium text-zinc-900 mb-4">
          Elə indi təklif verməyə başlayın
        </h2>
        <p className="text-lg text-zinc-600 mb-8">
          Hesabınıza daxil olaraq tenderdə iştirak edə bilərsiniz
        </p>
        <button className="bg-zinc-900 text-white px-8 py-3 rounded-lg hover:bg-zinc-800 transition-colors">
          Daxil ol
        </button>
      </div>
      <Image src="/CTABackground.svg" alt="CTA background" width={508} height={500} className="absolute inset-y-0 right-0 w-full h-full object-cover opacity-50" />
    </section>
  )
}