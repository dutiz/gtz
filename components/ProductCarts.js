import Image from 'next/image'

export default function ProductCarts({ image }) {
  return (
    <div className="md:col-6 relative">
      <Image
        src={image}
        width={438}
        height={400}
        className="mt-8 w-full h-full object-cover"
        alt="products"
        style={{ maxHeight: '400px' }}
      />
    </div>
  )
}
