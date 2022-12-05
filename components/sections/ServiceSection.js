import React from 'react'

import ServiceCart from '../ServiceCart'

export default function ServiceSection() {
  return (
    <div className="container">
      <div className="row my-24">
        <ServiceCart svg="architecture.svg" title="Business Plan Services">
          Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet.
        </ServiceCart>
        <ServiceCart svg="architecture.svg" title="Business Plan Services">
          Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet.
        </ServiceCart>
        <ServiceCart svg="architecture.svg" title="Business Plan Services">
          Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet.
        </ServiceCart>
      </div>
    </div>
  )
}
