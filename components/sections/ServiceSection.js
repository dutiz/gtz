import React from 'react'

import ServiceCart from '../ServiceCart'

export default function ServiceSection() {
  return (
    <div className="container">
      <div className="row my-24">
        <ServiceCart svg="architecture.svg" title="Planing">
          We plan and design your homes according to your wishes
        </ServiceCart>
        <ServiceCart svg="service-recycle.svg" title="Recycling">
          Put waste in the right place , for keeping our City clean and green
        </ServiceCart>
        <ServiceCart svg="service-world.svg" title="Delivery">
          Monitoring and servicing 24/7 , <br /> Delivered around the world
        </ServiceCart>
      </div>
    </div>
  )
}
