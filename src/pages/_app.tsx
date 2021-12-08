
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ProductCurrentProvider } from "../ProductsCurrentContext"

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ProductCurrentProvider>
      <Header />

      <Component {...pageProps} />

      <Footer />

    </ProductCurrentProvider>
  )
}

export default MyApp
