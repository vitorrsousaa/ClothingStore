import Head from 'next/head'
import { ButtonHome } from '../components/Home/ButtonHome'
import { HeroHome } from '../components/Home/HeroHome'
import { HomePanel } from '../components/Home/HomePanel'

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
