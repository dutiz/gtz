import ProductCart from '../ProductCart'

export default function ProductSection() {
  return (
    <div className="container">
      <div className="row justify-center g-0 my-12">
        <ProductCart image="/images/products/houses/house3-4.jpeg">House</ProductCart>
        <ProductCart image="/images/products/stairs/stairs-5.jpeg">Stairs</ProductCart>
        <ProductCart image="/images/products/decorations/decoration-32.jpg">
          Decorations
        </ProductCart>
        <ProductCart image="/images/products/smart-containers/container-3.jpg">
          Smart Containers
        </ProductCart>
        <ProductCart image="/images/products/fountains/fountain-4.jpg">Fountains</ProductCart>
        <ProductCart image="/images/products/chairs-tables/6.jpg">Chairs and Tables</ProductCart>
        <ProductCart image="/images/products/lighting/6.jpg">Lighting</ProductCart>
        <ProductCart image="/images/products/fireplaces/fireplaces-3.jpg">Fireplaces</ProductCart>
        <ProductCart image="/images/products/pergola/1.jpg">Pergola</ProductCart>
        <ProductCart image="/images/products/doorsframes/door-2.jpg">Doors/Frames</ProductCart>
      </div>
    </div>
  )
}
