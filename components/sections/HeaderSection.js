import Image from 'next/image'
import Link from 'next/link'

export default function HeaderSection() {
  return (
    <>
      <div
        className="relative top-0 flex items-center w-full h-full"
        style={{
          background: `linear-gradient(0deg, rgba(17, 17, 17, 0.75), rgba(17, 17, 17, 0.75)), url('./images/header-img.png') no-repeat center center / cover`,
          minHeight: '700px',
        }}
      >
        <div className="container">
          <div className="row justify-center">
            <div className="col-8 text-center">
              <h1 className="md:text-6xl text-3xl font-extrabold text-white">
                We Build The Future
              </h1>
              <p className="mt-3 text-white text-2xl">
                Why put iron on the concrete pillar , <br />
                When You can make it all from iron
              </p>
              <Link href="/contact" legacyBehavior>
                <a className="uppercase mt-5 inline-block px-10 py-5 bg-transparent hover:bg-green-500 text-white border border-white hover:border-green-500 rounded-3xl transition-all ease-in-out duration-500">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/layer.png"
        width={1400}
        height={200}
        className="hidden lg:block absolute inset-x-0 bottom-0 w-full h-auto"
        alt="layer"
      />
    </>
  )
}
