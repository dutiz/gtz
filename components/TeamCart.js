import Image from 'next/image'

export default function TeamCart({ avatar, position, children }) {
  return (
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
