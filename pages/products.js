import Link from 'next/link'
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
            <Button onClick={() => setCategory('Fountains')}>Fountains</Button>
            <Button onClick={() => setCategory('Chairs and Tables')}>Chairs and Tables</Button>
            <Button onClick={() => setCategory('Lighting')}>Lighting</Button>
            <Button onClick={() => setCategory('Fireplaces')}>Fireplaces</Button>
            <Button onClick={() => setCategory('Pergola')}>Pergola</Button>
            <Button onClick={() => setCategory('Doors / Frames')}>Doors / Frames</Button>
          </div>
        </div>
        <div className="row">
          {categories.items.map((item) => (
            <ProductCarts key={item.name} image={item.image}></ProductCarts>
          ))}
        </div>
        {category === 'House' ? (
          <div className="row">
            <div className="col-12">
              <Link href="/pdf/catalogue.pdf" target="_blank">
                <h3 className="mt-5 text-xl font-semibold hover:underline">See our catalogue</h3>
              </Link>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <QuotationSection />
    </Layout2>
  )
}
