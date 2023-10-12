export default function QuotationSection() {
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="row justify-center my-12">
          <div className="md:col-8">
            <h2 className="uppercase font-bold text-4xl text-center">Request a free quotation</h2>
            <form name="quotation" action="/success" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="quotation" />
              <div className="row mt-8">
                <div className="col-6">
                  <input
                    type="text"
                    name="FullName"
                    placeholder="Full Name"
                    className="w-full bg-gray-300 placeholder-gray-500 pl-4 py-6 "
                  />
                  <input
                    type="text"
                    name="Adress"
                    placeholder="Adress"
                    className="mt-8 w-full bg-gray-300 placeholder-gray-500 pl-4 py-6 "
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    name="Company"
                    placeholder="Company"
                    className="w-full bg-gray-300 placeholder-gray-500 pl-4 py-6 "
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="mt-8 w-full bg-gray-300 placeholder-gray-500 pl-4 py-6 "
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="Message"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    className="w-full mt-8 bg-gray-300 placeholder-gray-500 pl-4 pt-6"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="uppercase mt-5 px-10 py-5 bg-gray-900 hover:bg-green-500 text-white rounded-b-3xl transition-all ease-in-out duration-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
