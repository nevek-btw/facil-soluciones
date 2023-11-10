import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const menus = {
  main: [
    {
      id: 1,
      title: 'Presupuestar',
      url: '/presupuestar',
      description: 'Hipervinculo hacía el presupuesto.',
      enabled: true
    },
    {
      id: 2,
      title: 'Contacto',
      url: '#contacto',
      description: 'Hipervinculo hacía el contacto.',
      enabled: true
    },
    {
      id: 3,
      title: 'Dirección',
      url: '#direccion',
      description: 'Hipervinculo hacía la dirección.',
      enabled: true
    },
    /* {
      id: 4,
      title: 'Servicios',
      url: '#servicios',
      description: 'Hipervinculo hacía los servicios.',
      enabled: true
    } */
  ]
}