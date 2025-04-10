import { Tender } from '@/components/Tender/Tender'
import TenderStatistic from '@/components/Tender/TenderStatistic'
import React from 'react'


const TenderContainer = () => {
  return (
    <section>
        <TenderStatistic/>
        <Tender/>
    </section>
  )
}

export default TenderContainer