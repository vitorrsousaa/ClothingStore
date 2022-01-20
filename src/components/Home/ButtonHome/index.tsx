import Link from "next/link";

import styles from "./styles.module.scss";

export const ButtonHome = () => {
  return (
    <div className={styles.container}>
      <Link href="/shop">
        <button className={styles.content}>
          <a>VIEW ALL PRODUCTS</a>
        </button>
      </Link>
    </div>
  );
};
