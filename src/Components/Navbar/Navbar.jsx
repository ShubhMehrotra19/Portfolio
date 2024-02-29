import React from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Designs',
    href: '#',
  },
  {
    name: 'Random',
    href: '#',
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-transparent mb-16">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 py-2 sm:px-6 lg:px-8">
            <img className=' h-12 w-12' src="/images/Shubh_AvatarSmiling.png" alt="" />
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8 gap-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-md pb-1 px-5 font-semibold text-gray-600 hover:text-indigo-700 active:text-sm hover:border-b-2 hover:border-indigo-700 transition-all"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <NavLink to='/connect-with-me'>
          <button
            type="button"
            className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-700 hover:scale-105 active:scale-90"
          >
            Lets Connect
          </button>
          </NavLink>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                <img className=' h-12 w-12' src="/images/Shubh_AvatarSmiling.png" alt="" />
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
               <NavLink>
               <button
            type="button"
            className="mt-2 bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-700 hover:scale-105 active:scale-90"
          >
            Lets Connect
          </button>
               </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}