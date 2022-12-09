import Image from 'next/image'

import Button from '../Button'

export default function AboutSection() {
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="items-center row my-12">
          <div className="md:col-6 mt-5 md:mt-0 md:text-right text-center">
            <h3 className="uppercase font-medium text-3xl">Welcome</h3>
            <h1 className="mt-5 uppercase font-bold text-4xl">
              We are a <br /> creative build -<br /> design company
            </h1>
            <p className="mt-5 text-justify">
              GTZ Company located in Gostivar, North Macedonia with 30 years experience in the
              production of industrial machines in Switzerland with production of different
              industrial machines, Design, Ornaments for different interiors according to the
              customers request.
            </p>
            <p className="mt-5 text-justify">Monitoring and servicing 24/7 online.</p>
            <Button islink href="/about">
              Read More
            </Button>
          </div>
          <div className="md:col-6 order-first md:order-none">
            <Image src="/images/aboutsection-img.png" width={544} height={361} alt="section-img" />
          </div>
        </div>
      </div>
    </div>
  )
}
