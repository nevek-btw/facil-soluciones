import Link from "next/link"
import { Facebook } from "../icons/facebook"
import { Linkedin } from "../icons/linkedin"
import { Alt } from "../icons/alt"
import Image from "next/image"
import { Logo } from "../icons/logo"

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 mt-20 lg:mt-[10rem]">
      <div className="mx-auto max-w-8xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link 
            href="https://www.facebook.com/people/Fácil-Soluciones-Zapata-Gómez/100065166273956/"
            className="text-white hover:text-white/50"
          >
            <span className="sr-only">Facebook</span>
            <Facebook className="h-5 w-5" />
          </Link>
          <Link 
            href="https://www.facebook.com/people/Fácil-Soluciones-Zapata-Gómez/100065166273956/"
            className="text-white hover:text-white/50"
          >
            <span className="sr-only">Linkedin</span>
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link 
            href="mailto:solucioneszapatagomez@gmail.com"
            className="text-white hover:text-white/50"
          >
            <span className="sr-only">Email</span>
            <Alt className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-8 md:order-1 md:mt-0">
          <Logo className="h-8 w-auto" />
          <p className="text-left text-sm leading-5 text-white/50 my-2">
            Todos los derechos reservados.
          </p>
          <p className="text-left text-xs leading-5 text-white/50">
            © 2023 Fácil Soluciones Zapata Gómez.
          </p>
        </div>
      </div>
    </footer>
  )
}