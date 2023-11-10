import Image from 'next/image'
import { Layout } from './components/layout'

import { menus } from '@/app/lib/utils'
import { Hero } from './components/hero'
import { BentoGrid } from './components/bento-grid'
import { Steps } from './components/steps'

export default function Home() {
  return (
    <Layout menus={menus}>
      <Hero />
      <BentoGrid />
      <Steps />
    </Layout>
  )
}
