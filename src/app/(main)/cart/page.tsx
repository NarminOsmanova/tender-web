import React from 'react'
import CartContainer from '@/container/cart'
import { mockTenders } from '@/data/tenders';
import { getAllMockProducts } from '@/data/product';

const CartPage = () => {
    const tenderId = 2;
    const tender = mockTenders.find(t => t.id === tenderId); // Convert tenderId to a number for comparison
    if (!tender) return <div>Tender not found</div>;
    const products = getAllMockProducts().filter(p => p.tenderId === tenderId);
    return (
        <main>
            <CartContainer tender={tender} product={products} />
        </main>
    )
}
export default CartPage
