
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ProductsCartProvider } from "../ProductsCartContext"

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ProductsCartProvider>
      <Header />

      <Component {...pageProps} />

      <Footer />

    </ProductsCartProvider>
  )
}

export default MyApp
