import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ProductsCurrentContext = {
    idProduct: string;
    setIdProduct: (id: string) => void;
}

interface PropsProvider{
    children: ReactNode;
}


const ProductsCurrentContext = createContext<ProductsCurrentContext>({} as ProductsCurrentContext)

export function ProductCurrentProvider( {children}: PropsProvider ){
    const [idProduct, setIdProduct] = useState('1')

    useEffect( ()=> {
        setIdProduct(idProduct)
    }, [idProduct])

    return(
        <>
            <ProductsCurrentContext.Provider value={ { idProduct, setIdProduct } }>
                {children}
            </ProductsCurrentContext.Provider>
        </>
    )
}

export function useProductCurrent() {
    return useContext(ProductsCurrentContext)
}