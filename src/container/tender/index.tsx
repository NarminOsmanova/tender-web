import { Tender } from '@/container/tender/components/Tender'
import TenderStatistic from '@/container/tender/components/TenderStatistic'
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