import Image from 'next/image'
import Link from 'next/link'

export default function ProductCart({ image, children }) {
  return (
    <div className="md:col-4 relative">
      <Link href="/products">
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black hover:bg-transparent  text-white hover:text-transparent bg-opacity-75
                transition-all duration-100 ease-in"
        >
          <p className="text-xl">{children}</p>
        </div>
        <Image
          src={`/images/${image}`}
          width={438}
          height={400}
          className="w-full h-full object-cover"
          alt={children}
        />
      </Link>
    </div>
  )
}
