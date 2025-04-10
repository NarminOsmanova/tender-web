import ContentSection from '@/components/ContentSection'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'
import { CTASection } from '@/components/CTASection'
import { Partners } from '@/components/Partners'
import { Testimonials } from '@/components/Testimonials'
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