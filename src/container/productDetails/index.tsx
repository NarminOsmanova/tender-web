'use client'
import React from 'react'
import { ProductData } from '@/shared/models/ProductModels'
import ProductDetails from './components/ProductDetails';
import ProductForm from './components/ProductForm';

interface ProductDetailsContainerProps {
  product: ProductData;
  tenderSlug: string;
}

const ProductDetailsContainer: React.FC<ProductDetailsContainerProps> = ({ product, tenderSlug }) => {
  return (
    <section>
        <ProductDetails product={product} tenderSlug={tenderSlug}/>
        <ProductForm/>
    </section>
  )
}

export default ProductDetailsContainer