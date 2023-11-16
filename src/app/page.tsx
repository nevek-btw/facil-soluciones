import { Layout } from './components/layout-home'
import { Hero } from './components/hero'
import { BentoGrid } from './components/bento-grid'
import { Steps } from './components/steps'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import { Mision } from './components/mision'
import { Values } from './components/values'


import { menus } from '@/app/lib/utils'


export default function Home() {
  return (
    <Layout menus={menus}>
      <Hero />
      <BentoGrid />
      <Steps />
      <Values />
      <Mision />
      <Testimonials />
      <Footer />
    </Layout>
  )
}
