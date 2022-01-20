import Link from "next/link";
import { useProducts } from "../../../ProductsContext";
import styles from "./styles.module.scss";

export const ShopPanel = () => {
  const { products, setProductCurrent } = useProducts();
  function handleClickImage(product) {
    setProductCurrent(product);
  }
  return (
    <div className={styles.productListContainer}>
      {products.map((product) => {
        return (
          <div
            className={styles.productListContent}
            key={product.id}
            id={product.id}
          >
            <Link href={`/products/${product.alt}`}>
              <img
                src={product.path}
                alt={product.alt}
                loading="lazy"
                onClick={() => handleClickImage(product)}
              />
            </Link>
            <div className={styles.productInfoContainer}>
              <h2>{product.name}</h2>
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price / 100)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
