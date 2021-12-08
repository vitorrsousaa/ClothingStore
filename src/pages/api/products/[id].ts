import { NextApiRequest, NextApiResponse } from "next";

interface productCurrentProps {
    id: string;
    name: string;
    path: string;
    alt: string;
    description: string;
    price: number;
}


export default (request: NextApiRequest, response: NextApiResponse) => {

    const { id }  = request.query

    const products = [
        { 
            id: '1', 
            name: 'THE YELLOW JACKET', 
            path: '/images/ManLooks (2).jpg', 
            alt:'YellowJacket', 
            description:'LOREM AYSASDJASDASDASDASD', 
            price:15000
        },{ 
            id: '2', 
            name: 'GIRL POWER SHIRT', 
            path: '/images/WomanLooks (1).jpg', 
            alt:'GirlPowerShirt', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            price: 17900
        },{ 
            id: '3', 
            name: 'AMAZING BLACK JEANS', 
            path: '/images/ManLooks (3).jpg', 
            alt:'AmazingBlackJeans', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            price: 18000
        },{ 
            id: '4', 
            name: 'SWEATER', 
            path: '/images/ManLooks (1).jpg', 
            alt:'Sweater', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            price: 8000
        },{ 
            id: '5', 
            name: 'SUNGLASS MODERN', 
            path: '/images/sunglasses (1).jpg', 
            alt:'SunglassModern', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            price: 4000
        },{ 
            id: '6', 
            name: 'SUNGLASS HIGHLINE', 
            path: '/images/sunglasses (2).jpg', 
            alt:'SunglassHighline', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            price: 40000
        },{ 
            id: '7', 
            name: 'THE BLACK WATCH', 
            path: '/images/watches (2).jpg', 
            alt:'TheBlackWatch', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            price: 20000
        },{ 
            id: '8', 
            name: 'SHIRT', 
            path: '/images/Woman.jpg', 
            alt:'Shirt', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            price: 27000
        },
        
    ]

    let productCurrent = {} as productCurrentProps

    products.map((product)=>{
        if(product.id == id) {
            productCurrent = product
        }
    })

    return response.json(productCurrent)
}
