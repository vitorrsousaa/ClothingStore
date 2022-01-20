import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductsCartProvider } from "../ProductsCartContext";
import { ProductsContextProvider } from "../ProductsContext";

import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ProductsCartProvider>
      <ProductsContextProvider>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </ProductsContextProvider>
    </ProductsCartProvider>
  );
}

export default MyApp;
