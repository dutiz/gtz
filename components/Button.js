import Link from 'next/link'

const style =
  'uppercase mt-5 px-10 py-5 bg-gray-900 hover:bg-green-500 text-white rounded-b-3xl transition-all ease-in-out duration-500'
export default function Button({ className, type, islink, href, children, onClick }) {
  return islink ? (
    <Link href={href} legacyBehavior>
      <a className={`inline-block  ${style} ${className}`}>{children}</a>
    </Link>
  ) : (
    <button type={type} className={`${style} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
