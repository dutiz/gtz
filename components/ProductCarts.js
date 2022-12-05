import React from 'react'

export default function ProductCarts() {
  return (
    <div className="md:col-6 mt-8   ">
      <div
        style={{
          background: `url('/images/product1.png')`,
          minHeight: '511px',
        }}
        className="transition bg-cover bg-center bg-no-repeat overflow-hidden flex items-end hover:shadow-outline"
      >
        <div className="bg-gray-900 opacity-70 w-full p-8">
          <h1 className="font-bold text-2xl text-white">Product1</h1>
          <p className="font-medium text-white">Dimensions: 400 m2 , Location: Switzerland, </p>
        </div>
      </div>
    </div>
  )
}
