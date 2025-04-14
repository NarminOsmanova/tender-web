import ContentSection from '@/container/home/components/ContentSection'
import Features from '@/container/home/components/Features'
import Hero from '@/container/home/components/Hero'
import FAQ from '@/container/home/components/FAQ'
import ContactSection from '@/container/home/components/ContactSection'
import { CTASection } from '@/container/home/components/CTASection'
import { Partners } from '@/container/home/components/Partners'
import { Testimonials } from '@/container/home/components/Testimonials'
import React from 'react'

const HomeContainer = () => {
    return (
        <section className='w-full'>
            <Hero />
            <ContentSection />
            <Features />
            <ContactSection />
            <FAQ />
            <Testimonials />
            <Partners />
            <CTASection />
        </section>
    )
}

export default HomeContainer