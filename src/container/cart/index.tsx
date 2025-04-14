import React from 'react'
import Cart from './components/Cart/Cart'
import { TenderData } from '@/shared/models/TenderModels'
import { ProductData } from '@/shared/models/ProductModels'

interface IProps{
    tender:TenderData,
    product:ProductData[]
}
const CartContainer = ({tender,product}:IProps) => {
  return (
    <section>
        <Cart tender={tender} product={product}/>
    </section>
  )
}

export default CartContainer