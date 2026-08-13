import Image from 'next/image'
import Link from 'next/link'

export default function OfferSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800">Our Offers</h2>
            <p className="mt-3 text-gray-600">
              Discover the best deals and offers we have for you.
            </p>
          </div>
        </div>
        <div className="row mt-10">
          <div className="col-4">
            <Link href="/contact">
              <Image
                src="/images/offer-1.jpg"
                width={600}
                height={400}
                className="w-full h-auto"
                alt="Offer 1"
              />
            </Link>
          </div>
          <div className="col-4">
            <Link href="/contact">
              <Image
                src="/images/offer-2.jpg"
                width={600}
                height={400}
                className="w-full h-auto"
                alt="Offer 1"
              />
            </Link>
          </div>
          <div className="col-4">
            <Link href="/contact">
              <Image
                src="/images/offer-3.jpg"
                width={600}
                height={400}
                className="w-full h-auto"
                alt="Offer 1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
