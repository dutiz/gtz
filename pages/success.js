import Image from 'next/image'
import React from 'react'

import Button from '@/components/Button'
import Layout2 from '@/components/layout/Layout2'

export default function Success() {
  return (
    <Layout2 title="Form Success">
      <div className="container">
        <div className="row h-screen text-center items-center">
          <div className="col-12">
            <Image
              src="/images/tick-img.png"
              width={300}
              height={300}
              alt="tick-image"
              className="mx-auto"
            />
            <h1 className="mt-7 text-5xl font-bold">Form successfully submitted!</h1>
            <Button islink href="/" className="mt-7">
              Back To Page
            </Button>
          </div>
        </div>
      </div>
    </Layout2>
  )
}
