import ProductCart from '../ProductCart'

export default function ProductSection() {
  return (
    <div className="container">
      <div className="row g-0 my-12">
        <ProductCart image="/images/products/houses/house3-4.jpeg">House</ProductCart>
        <ProductCart image="/images/products/stairs/stairs-5.jpeg">Stairs</ProductCart>
        <ProductCart image="/images/smart-container.jpeg">Smart Containers</ProductCart>
      </div>
    </div>
  )
}
