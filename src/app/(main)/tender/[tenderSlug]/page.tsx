import React from 'react'
import { mockTenders } from '@/data/tenders'
import TenderDetailsContainer from '@/container/tenderDetails'

interface TenderDetailsPageProps {
  params: { tenderSlug: string };
}

const TenderDetailsPage = ({ params }: TenderDetailsPageProps) => {
  const tender = mockTenders.find(t => t.slug === params?.tenderSlug);
  if (!tender) return <div>Tender not found</div>;

  return (
    <main>
      <TenderDetailsContainer slug={params.tenderSlug} tender={tender} />
    </main>
  );
};

export async function generateStaticParams() {
  return mockTenders.map(t => ({
    tenderSlug: t.slug,
  }));
}

export default TenderDetailsPage;
