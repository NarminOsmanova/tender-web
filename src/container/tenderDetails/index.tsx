import TenderDetails from '@/container/tenderDetails/components/TenderDetails'
import React from 'react'
import { TenderData } from '@/shared/models/TenderModels';

const TenderDetailsContainer = ({ slug, tender }: { slug: string, tender: TenderData }) => {
  return (
    <section>
        <TenderDetails slug={slug} tender={tender}/>
    </section>
  )
}

export default TenderDetailsContainer