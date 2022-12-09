import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href, className }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link href={href} legacyBehavior>
        <a
          className={`block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent ${className}
          `}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  return (
    <div
      className={`fixed w-full top-0 left-0 ${color ? 'bg-white ' : 'bg-white md:bg-transparent'}`}
      style={{ zIndex: '9999' }}
    >
      <div className="container">
        <div className="row py-6 justify-between items-center">
          <div className="col-4">
            <Link href="/">
              <SVG
                src="/svg/logo.svg"
                className={`w-20 h-auto fill-current ${color ? 'text-black' : 'text-white'}`}
              />
            </Link>
          </div>
          <div className="col-2 md:hidden block">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/menu.svg"
                className={`fill-current ${color ? 'text-black' : 'text-black'} w-6 h-6`}
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`md:col-4 md:flex justify-center md:justify-center bg-white md:bg-transparent ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex w-full p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem
                href="/"
                className={`${color ? 'text-black ' : 'text-black md:text-white'} `}
              >
                Home
              </NavItem>
              <NavItem
                href="/about"
                className={`${color ? 'text-black' : 'text-black md:text-white'} `}
              >
                About
              </NavItem>
              <NavItem
                href="/products"
                className={`${color ? 'text-black' : 'text-black md:text-white'} `}
              >
                Products
              </NavItem>
              <NavItem
                href="/contact"
                className={`${color ? 'text-black' : 'text-black md:text-white'} `}
              >
                Contact
              </NavItem>
            </ul>
          </div>
          <div className="md:col-4 md:flex hidden items-center justify-end">
            <a
              href="tel:0038970848843"
              className={`inline-block px-10 py-5 bg-transparent hover:bg-green-500 ${
                color ? 'text-black border-black' : 'text-white border-white'
              } border hover:border-green-500 hover:text-white rounded-3xl transition-all ease-in-out duration-500`}
            >
              +389 70 848 843
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
