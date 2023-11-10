import { FCMenuLink } from "@/app/lib/definitions";
import { Navbar } from "./navbar";

export type LayoutProps = {
  menus: {
    main: FCMenuLink[]
  }
  children?: React.ReactNode
}

export function Layout({ menus, children}: LayoutProps) {
  return (
    <div>
      <Navbar links={menus.main} />
      <main className="flex-1">{children}</main>
    </div>
  )
}