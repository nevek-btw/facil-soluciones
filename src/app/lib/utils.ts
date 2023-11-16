import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { InfoIcon } from '../icons/info'
import { Solution } from '../icons/solution'
import { Efficiency } from '../icons/efficiency'

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
      title: 'Valores',
      url: '#valores',
      description: 'Hipervinculo hacía los valores.',
      enabled: true
    },
    {
      id: 3,
      title: 'Dirección',
      url: '#direccion',
      description: 'Hipervinculo hacía la dirección.',
      enabled: true
    },
    {
      id: 4,
      title: 'Nuestra Misión',
      url: '#mision',
      description: 'Hipervinculo hacía la misión',
      enabled: true
    }
    /* {
      id: 4,
      title: 'Servicios',
      url: '#servicios',
      description: 'Hipervinculo hacía los servicios.',
      enabled: true
    } */
  ]
}


export const values = [
  {
    icon: InfoIcon,
    title: 'Información Financiera Centralizada',
    content: 'Nuestra plataforma integra datos financieros clave, ofreciendo una visión centralizada que facilita el análisis y la toma de decisiones en tiempo real.'
  },
  {
    icon: Solution,
    title: 'Soluciones Constructivas Innovadoras',
    content: 'Desarrollamos proyectos con enfoque en la innovación, utilizando tecnologías de construcción avanzadas para garantizar resultados superiores y sostenibles.'
  },
  {
    icon: Efficiency,
    title: 'Eficiencia Operativa',
    content: 'Nuestro enfoque integral en la eficiencia operativa garantiza una ejecución fluida de proyectos, maximizando recursos y reduciendo costos para un rendimiento financiero sólido.'
  }
]