import { useState } from 'react'

import Button from '@/components/Button'
import ProductCarts from '@/components/ProductCarts'
import QuotationSection from '@/components/sections/QuotationSection'

import Layout2 from '../components/layout/Layout2'
import items from '../content/products'

export default function Products() {
  const [category, setCategory] = useState('House')
  const categories = items.items.find((i) => i.name === category)
  return (
    <Layout2 title="Products">
      <div className="container">
        <div className="row my-6">
          <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-4 md:gap-8">
            <Button onClick={() => setCategory('House')}>House</Button>
            <Button onClick={() => setCategory('Stairs')}>Stairs</Button>
            <Button onClick={() => setCategory('Decorations')}>Decorations</Button>
            <Button onClick={() => setCategory('Smart Parking')}>Smart Parking</Button>
            <Button onClick={() => setCategory('Smart Containers')}>Smart Containers</Button>
          </div>
        </div>
        <div className="row">
          {categories.items.map((item) => (
            <ProductCarts key={item.name} image={item.image}></ProductCarts>
          ))}
        </div>
      </div>
      <QuotationSection />
    </Layout2>
  )
}
