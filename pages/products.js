import ProductCarts from '@/components/ProductCarts'
import QuotationSection from '@/components/sections/QuotationSection'

import Layout2 from '../components/layout/Layout2'

export default function products() {
  return (
    <Layout2 title="Products">
      <div className="container">
        <div className="row">
          <ProductCarts />
        </div>
      </div>
      <QuotationSection />
    </Layout2>
  )
}
