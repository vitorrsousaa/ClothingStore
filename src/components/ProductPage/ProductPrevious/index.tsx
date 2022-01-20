import { ButtonCart } from "../ButtonCart";
import { SizeContent } from "./SizeContent";
import { ColorContent } from "./ColorContent";
import { QuantityContent } from "./QuantityContent";
import { InfoContent } from "./InfoContent";

import styles from "./styles.module.scss";
import { useState } from "react";
import { DescriptionContent } from "./DescriptionContent";
import { SocialContent } from "./SocialContent";
import { ImageContainer } from "./ImageContainer";

interface ProductProps {
  product: {
    id: string;
    name: string;
    alt: string;
    size: string[];
    color: string[];
    price: number;
    description: string;
    path: string;
  };
}

export const ProductPrevious = ({ product }: ProductProps) => {
  const [sizeSelected, setSizeSelected] = useState("");
  const [colorSelected, setColorSelected] = useState("");
  const [quantitySelected, setQuantitySelected] = useState(0);

  return (
    <section className={styles.container}>
      <ImageContainer path={product.path} alt={product.alt} />

      <div className={styles.infoContainer}>
        <InfoContent name={product.name} price={product.price} />

        <DescriptionContent description={product.description} />

        <SocialContent />

        <SizeContent
          sizes={product.size}
          sizeSelected={sizeSelected}
          setSizeSelected={setSizeSelected}
        />

        <ColorContent
          colors={product.color}
          colorSelected={colorSelected}
          setColorSelected={setColorSelected}
        />

        <QuantityContent
          setQuantity={setQuantitySelected}
          quantity={quantitySelected}
        />

        <ButtonCart
          name={product.name}
          id={product.id}
          size={sizeSelected}
          color={colorSelected}
          price={product.price}
          quantity={quantitySelected}
          path={product.path}
        />
      </div>
    </section>
  );
};
