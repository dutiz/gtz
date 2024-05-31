import Image from 'next/image'

import Layout2 from '../components/layout/Layout2'

export default function machines() {
  return (
    <Layout2 title="List of Machines">
      <div className="container">
        <div className="row py-10">
          <div className="col-12 text-center">
            <p className="my-5 text-lg font-semibold">
              We produce for you cost-effectively and with high quality.
              <br />
              Contract work also welcome, also framework agreements.
              <br /> With 30 years of experience. Our customers iclude well-known companies in
              Switzerland
              <br /> Programmed with MasterCam
            </p>
            <h1 className="mt-10 lg:text-4xl md:text-2xl text-xl font-semibold">
              List Of Machines and equipments
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="lg:col-6">
            <h1 className="text-3xl font-bold">Milling</h1>
            <Image
              src="/images/machines/2.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="milling-2"
            />
            <p className="my-7 text-xl font-semibold">
              CNC Vertical Centering <br />
              Hedelius CB-50-1800
              <br />X 1800 Y 500 Z 500
            </p>
            <Image
              src="/images/machines/7.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="milling-7"
            />
            <p className="my-7 text-xl font-semibold">MAHO X 500 Y 300 Z 500 </p>
            <h1 className="text-3xl font-bold">CNC - Plasma</h1>
            <Image
              src="/images/machines/1.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="cnc-plasma-1"
            />
            <Image
              src="/images/machines/28.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="cnc-plasma-2"
            />
            <p className="my-7 text-xl font-semibold">X 1500 Y 3000 Z 40 Pipe F-400</p>
            <h1 className="text-3xl font-bold">Pipe Bending Machines</h1>
            <Image
              src="/images/machines/11.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="pipebending-11"
            />
            <p className="my-7 text-xl font-semibold">80 mm</p>
            <Image
              src="/images/machines/12.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="pipebending-12"
            />
            <p className="my-7 text-xl font-semibold">100 mm</p>
            <h1 className="text-3xl font-bold">Metal Saw Machines</h1>
            <Image
              src="/images/machines/13.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="metalsaw-13"
            />
            <p className="my-7 text-xl font-semibold">500 mm </p>
            <Image
              src="/images/machines/14.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="metalsaw-14"
            />
            <p className="my-7 text-xl font-semibold">360 mm</p>
            <Image
              src="/images/machines/15.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="metalsaw-15"
            />
            <p className="my-7 text-xl font-semibold">500 mm</p>
            <h1 className="text-3xl font-bold">Sand Blasting Machines</h1>
            <Image
              src="/images/machines/29.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="sandblasting-29"
            />
            <p className="my-7 text-xl font-semibold">Exterior Sand Blasting</p>
            <Image
              src="/images/machines/17.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="sandblasting-17"
            />
            <p className="my-7 text-xl font-semibold">
              Cabine Sand Blasting <br /> W 1000mm L 1600mm H 1000mm
            </p>
          </div>
          <div className="lg:col-6 my-9">
            <h1 className="text-3xl font-bold">Turn</h1>
            <Image
              src="/images/machines/3.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="turn-3"
            />
            <p className="my-7 text-xl font-semibold">
              CNC Lathe <br /> Okuna Genus L300M
            </p>
            <Image
              src="/images/machines/4.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="turn-4"
            />
            <p className="my-7 text-xl font-semibold">
              CNC Lathe <br /> Okuna Soarer L270E
            </p>
            <Image
              src="/images/machines/6.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="turn-6"
            />
            <p className="my-7 text-xl font-semibold">Conventional Turn</p>
            <Image
              src="/images/machines/8.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="turn-8"
            />
            <p className="my-7 text-xl font-semibold">Conventional Turn</p>
            <h1 className="text-3xl font-bold">Press Machines</h1>
            <Image
              src="/images/machines/5.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="press-5"
            />
            <p className="my-7 text-xl font-semibold">100 T / 2000 mm U 30 mm</p>
            <Image
              src="/images/machines/9.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="press-9"
            />
            <p className="my-7 text-xl font-semibold">100 T</p>
            <Image
              src="/images/machines/10.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="press-10"
            />
            <p className="my-7 text-xl font-semibold">Punch Press </p>
            <Image
              src="/images/machines/18.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="press-18"
            />
            <p className="my-7 text-xl font-semibold">Welding Pipe Robot</p>
            <Image
              src="/images/machines/19.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="press-19"
            />
            <p className="my-7 text-xl font-semibold">Welding Pipe Robot</p>
            <h1 className="text-3xl font-bold">Powder Coating Machines</h1>
            <Image
              src="/images/machines/23.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="powdercoating-23"
            />
            <p className="my-7 text-xl font-semibold">Powder Coating Machine Wagner</p>
            <Image
              src="/images/machines/24.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="powdercoating-24"
            />
            <p className="my-7 text-xl font-semibold">
              Powder Coat Oven
              <br /> W 2000mm L 7200mm H 2200mm
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="text-3xl font-bold">Metal Welding Machines</h1>
          </div>
          <div className="lg:col-6">
            <Image
              src="/images/machines/16.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="metalwelding-16"
            />
            <p className="my-7 text-xl font-semibold">Spot Welding Machine</p>
            <Image
              src="/images/machines/25.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="metalwelding-25"
            />
            <p className="my-7 text-xl font-semibold">Welding Machine</p>
          </div>
          <div className="lg:col-6 mt-9">
            <Image
              src="/images/machines/26.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="metalwelding-26"
            />
            <p className="my-7 text-xl font-semibold">Welding Machine</p>
            <Image
              src="/images/machines/27.jpg"
              width={1049}
              height={700}
              className="mt-7 w-full h-auto"
              alt="metalwelding-27"
            />
            <p className="my-7 text-xl font-semibold">Welding Machine</p>
          </div>
        </div>
      </div>
    </Layout2>
  )
}
