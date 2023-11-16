import Link from "next/link"
import { FCMenuLink } from "@/app/lib/definitions"
import { Logo } from "../icons/logo"
import { Phone } from "../icons/phone"

type NavbarProps = {
  links: FCMenuLink[]
}

export function Navbar({ links, ...props }: NavbarProps) {
  return (
    <header 
      className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 border-slate-50/[0.06] bg-black/[0.08] shadow-[inset_0_-1px_0_0_#333]" 
      {...props}
    >
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b lg:px-8 lg:border-0 border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <Link 
              className="mr-3 flex-none overflow-hidden md:w-auto" 
              href="/"
              aria-label="Inicio"
            >
              <Logo className="text-white w-auto h-7" />
            </Link>

            <div className="relative hidden lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-200">
                {links ? <Menu items={links} /> : null}
              </nav>

              <div className="flex items-center border-l ml-6 pl-6 border-slate-800">
                <a 
                  href="tel:+1809-586-0708" 
                  className="block text-white hover:text-green-500"
                  aria-label="Hacer un llamada"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function Menu({ items }: { items: FCMenuLink[] }) {
  return (
  <ul
    className="flex space-x-8"
  >
    {items.map((item) => (
        <MenuLink link={item} key={item.id} />
    ))}
  </ul>
  )
}

function MenuLink({ link }: { link: FCMenuLink }) {
  return (
    <li>
      <Link 
        href={link.url}
        className="hover:text-green-500 text-sm font-semibold tracking-wider transition-colors duration-200"
      >
        {link.title}
      </Link>
    </li>
  )
}