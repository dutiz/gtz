import ProductCart from '../ProductCart'

export default function ProductSection() {
  return (
    <div className="container">
      <div className="row g-0 my-12">
        <ProductCart image="prod.png">House</ProductCart>
        <ProductCart image="prod.png">Stairs</ProductCart>
        <ProductCart image="prod.png">Smart Containers</ProductCart>
      </div>
    </div>
  )
}
