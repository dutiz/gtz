import Image from 'next/image'

import QuotationSection from '@/components/sections/QuotationSection'
import TeamSection from '@/components/sections/TeamSection'
import Layout2 from '@/layout/Layout2'

export default function about() {
  return (
    <Layout2 title="About">
      <div className="container">
        <div className="items-center row my-20">
          <div className="md:col-6 mt-5 md:mt-0 md:text-right text-center">
            <h3 className="uppercase font-medium text-3xl">Welcome</h3>
            <h1 className="mt-5 uppercase font-bold text-4xl">
              We are a <br /> creative build -<br /> design company
            </h1>
            <p className="mt-5 text-justify">
              GTZ Company located in Gostivar, North Macedonia with 30 year experience in the
              production of industrial machines in Switzerland we offer:
            </p>
            <p className="text-justify mt-5">
              The Production of different industrial machines, Design, Ornaments for different
              interiors according to the customers request.{' '}
            </p>
            <p className="text-justify mt-5">
              The use of SMART systems for controlling of the machines.{' '}
            </p>
            <p className="text-justify mt-5">Monitoring and servicing 24/7 online.</p>
          </div>
          <div className="md:col-6 order-first md:order-none">
            <Image
              src="/images/about-img.png"
              width={541}
              height={834}
              alt="about-img"
              className="w-auto h-screen"
            />
          </div>
        </div>
      </div>
      <TeamSection />
      <QuotationSection />
    </Layout2>
  )
}
