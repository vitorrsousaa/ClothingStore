import Head from 'next/head'
import { ButtonHome } from '../components/ButtonHome'
import { HeroHome } from '../components/HeroHome'
import { HomePanel } from '../components/HomePanel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Clothing store</title>
      </Head>

      <HeroHome />

      <HomePanel />

      <ButtonHome />
      
    </>
  )
}
