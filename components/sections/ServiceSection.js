import Image from 'next/image'
import React from 'react'

import ServiceCart from '../ServiceCart'

export default function ServiceSection() {
  return (
    <div className="container">
      <div className="row my-24">
        <ServiceCart svg="architecture.svg" title="Planing">
          We plan , design and construction your homes and products according to your wishes
        </ServiceCart>
        <ServiceCart svg="service-recycle.svg" title="Recycling">
          Put waste in the right place , for keeping our City clean and green
        </ServiceCart>
        <ServiceCart svg="service-world.svg" title="Delivery">
          Monitoring and servicing 24/7 , <br /> Delivered around the world
        </ServiceCart>
        <div className="row mt-4">
          <div className="lg:col-4 mt-5 lg:mt-0 text-center">
            <a href="https://en.wikipedia.org/wiki/Sandblasting" target="_blank" rel="noreferrer">
              <Image
                src="/images/sandblassting.jpg"
                width={50}
                height={50}
                className="mx-auto  w-14 h-14"
                alt="sandblasting"
              />
              <h2 className="mt-5 text-xl">Sandblasting</h2>
              <p className="mt-5 text-gray-400">
                We do sandblasting on: wood , all type of metals and concrete walls
              </p>
            </a>
          </div>
          <div className="lg:col-4 mt-5 lg:mt-0 text-center">
            <a href="https://en.wikipedia.org/wiki/Welding" target="_blank" rel="noreferrer">
              <Image
                src="/images/welding.jpg"
                width={50}
                height={50}
                className="mx-auto  w-14 h-14"
                alt="welding"
              />
              <h2 className="mt-5 text-xl">Welding</h2>
              <p className="mt-5 text-gray-400">We weld steel , aluminium and inox materials</p>
            </a>
          </div>
          <div className="lg:col-4 mt-5 lg:mt-0 text-center">
            <a
              className="block"
              href="https://en.wikipedia.org/wiki/Powder_coating"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/powdercoating.png"
                width={400}
                height={260}
                className="mx-auto  w-20 h-14"
                alt="powdercoating"
              />
              <h2 className="mt-5 text-xl">Powder Coating</h2>
              <p className="mt-5 text-gray-400">
                Powder coating is a type of coating that is applied as a free-flowing, dry powder.{' '}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
