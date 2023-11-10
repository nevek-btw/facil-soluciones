import { Layout } from './components/layout-home'
import { Hero } from './components/hero'
import { BentoGrid } from './components/bento-grid'
import { Steps } from './components/steps'

import { menus } from '@/app/lib/utils'

export default function Home() {
  return (
    <Layout menus={menus}>
      <Hero />
      <BentoGrid />
      <Steps />
    </Layout>
  )
}
