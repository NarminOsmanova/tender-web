import React from 'react'
import ProductDetailsContainer from '@/container/productDetails'
import { mockTenders } from '@/data/tenders'
import { getAllMockProducts } from '@/data/product'

interface ProductDetailsPageProps {
  params: { tenderSlug: string; productSlug: string };
}

const ProductDetailsPage = ({ params }: ProductDetailsPageProps) => {
  const product = getAllMockProducts().find(p => p.slug === params.productSlug);
  const tender = mockTenders.find(t => t.slug === params.tenderSlug);

  if (!product || !tender) return <div>Product or Tender not found</div>;

  return (
    <main>
      <ProductDetailsContainer product={product} tenderSlug={tender.slug} />
    </main>
  );
};

export async function generateStaticParams() {
  const products = getAllMockProducts();

  return mockTenders.flatMap(tender =>
    products.map(product => ({
      tenderSlug: tender.slug,
      productSlug: product.slug,
    }))
  );
}

export default ProductDetailsPage;
