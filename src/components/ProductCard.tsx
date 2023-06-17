import { Product } from 'types/index'
import React from 'react'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div key={product.id} className="relative">
      {/* <p className='text-sm absolute bg-neutral-200 left-0'>{product.category.name}</p> */}
      <img src={product.images[0]} alt="" className='h-44 w-full object-cover mb-4' />
      <p className='text-xs font-bold'>{product.category.name}</p>
      <h1 className='break-all md:text-lg'>{product.title}</h1>
      <p className='text-red-500'>
        ${product.price}
      </p>
    </div>
  )
}

export default ProductCard