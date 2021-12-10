
import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ProductsCartProviderProps {
    children: ReactNode
}

interface ProductsCartContextData{
    products: ProductProps[]
    createProductCart: (productInput: ProductProps) => Promise<void>;
}

interface ProductProps {
    id: string;
    name: string;
    quantity: number;
    size: string;
    color: string;
    price: number;
    path: string;
}

export const ProductsCartContext = createContext<ProductsCartContextData>({} as ProductsCartContextData)

export function ProductsCartProvider( {children}: ProductsCartProviderProps ) {
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/api/cart')
            .then(response => setProducts(response.data))
    }, [])

    async function createProductCart(productInput: ProductProps) {
        // const response = await axios.post('http://localhost:3000/api/cart',
        // {...productInput})

        // const { product } = response.data;

        setProducts([
            ...products,
            productInput
        ])


   }

    return(
        <ProductsCartContext.Provider value={ { products, createProductCart } }>
            {children}
        </ProductsCartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(ProductsCartContext);

    return context
}