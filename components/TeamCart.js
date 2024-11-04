/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import { useState } from 'react'

export default function TeamCart({ avatar, position, vertrieb, adress, phonenr, email, children }) {
  const [clicked, useClicked] = useState(false)

  return vertrieb ? (
    <div className="md:col-6 mt-8">
      <div className="flex flex-row items-center border border-gray-50">
        <div className="col-6">
          <Image src={`/images/${avatar}`} width={198} height={264} alt="team1" />
        </div>
        <div className="col-6 pl-3 md:pl-0">
          <p>{children}</p>
          <p className="mt-3 text-gray-700">{position}</p>
          {clicked ? (
            <>
              <p className="mt-5">{adress} </p>
              <p className="sm:text-sm lg:text-base">Mail: {email} </p>
              <p className="sm:text-sm lg:text-base">Phone Number: {phonenr} </p>
              <button onClick={() => useClicked(false)}>Show Less</button>
            </>
          ) : (
            <button onClick={() => useClicked(true)}>Show More</button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="md:col-6 mt-8">
      <div className="flex flex-row items-center border border-gray-50">
        <div className="col-6">
          <Image src={`/images/${avatar}`} width={198} height={264} alt="team1" />
        </div>
        <div className="col-6 pl-3 md:pl-0">
          <p>{children}</p>
          <p className="mt-3 text-gray-700">{position}</p>
        </div>
      </div>
    </div>
  )
}
