import ContentSection from '@/container/home/components/ContentSection'
import Features from '@/container/home/components/Features'
import Hero from '@/container/home/components/Hero'
import FAQ from '@/container/home/components/FAQ'
import ContactSection from '@/container/home/components/ContactSection'
import { CTASection } from '@/container/home/components/CTASection'
import { Partners } from '@/container/home/components/Partners'
import { Testimonials } from '@/container/home/components/Testimonials'
import { ActiveTenders } from './components/ActiveTenders'

export default function HomeContainer() {
    return (
        <section className='w-full'>
            <Hero />
            <Features />
            <ContentSection />
            <CTASection />
            <ContactSection />
            <ActiveTenders/>
            <FAQ />
            <Testimonials />
            <Partners />
        </section>
    )
}