import SVG from 'react-inlinesvg'

import Button from '@/components/Button'
import Layout2 from '@/layout/Layout2'

export default function contact() {
  return (
    <Layout2 title="Contact">
      <div
        className="flex items-center"
        style={{
          background: `linear-gradient(0deg, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url('./images/contact-bg.png') no-repeat center center / cover`,
          minHeight: '800px',
        }}
      >
        <div className="container">
          <div className="row justify-center items-center">
            <div className="md:col-6 mt-5 md:mt-0">
              <p className="border-l-2 pl-3 border-white text-white text-sm">Contact us</p>
              <h2 className="mt-6 text-4xl text-white font-semibold">Our Office</h2>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex items-center mt-9">
                  <SVG src="/svg/location.svg" className="fill-current w-10 h-10" />
                  <p className="text-white ml-5">Gostivar 1230 , Macedonia</p>
                </div>
                <div className="inline-flex items-center mt-9">
                  <SVG src="/svg/phone.svg" className="fill-current w-10 h-10" />
                  <p className="text-white ml-5">+389 70 848 843</p>
                </div>
                <div className="inline-flex items-center mt-9">
                  <SVG src="/svg/mail.svg" className="fill-current w-10 h-10" />
                  <p className="text-white ml-5">gtz.macedonia@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="md:col-6 my-8 md:my-0 bg-white py-5">
              <h2 className="text-4xl font-semibold">Send a request</h2>
              <form name="Contact" netlify="true" className="mt-5">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="py-2 pl-4 w-full border rounded-sm placeholder-gray-400"
                />
                <input
                  type="text"
                  name="EMail"
                  placeholder="E-Mail"
                  className="py-2 pl-4 w-full border rounded-sm placeholder-gray-400 mt-5"
                />
                <input
                  type="text"
                  name="Company"
                  placeholder="Company"
                  className="py-2 pl-4 w-full border rounded-sm placeholder-gray-400 mt-5"
                />
                <textarea
                  name="message"
                  placeholder="Message:"
                  cols="30"
                  rows="10"
                  className="w-full py-2 pl-4 border rounded-sm mt-5"
                />
                <div className="flex justify-center">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  )
}
