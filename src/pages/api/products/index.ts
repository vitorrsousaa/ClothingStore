import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {

    const products = [
        { 
            id: '1', 
            name: 'THE YELLOW JACKET', 
            path: '/images/ManLooks (2).jpg', 
            alt:'YellowJacket', 
            size: ['M', 'L', 'G'],
            color: ['Yellow'],
            description:'LOREM AYSASDJASDASDASDASD', 
            price:15000
        },{ 
            id: '2', 
            name: 'GIRL POWER SHIRT', 
            path: '/images/WomanLooks (1).jpg', 
            alt:'GirlPowerShirt', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            size: ['M', 'L', 'G'],
            color: ['White', 'Pink', 'Brown'],
            price: 17900
        },{ 
            id: '3', 
            name: 'AMAZING BLACK JEANS', 
            path: '/images/ManLooks (3).jpg', 
            alt:'AmazingBlackJeans', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            size: ['M', 'L', 'G', 'GG'],
            color: ['Black'],
            price: 18000
        },{ 
            id: '4', 
            name: 'SWEATER', 
            path: '/images/ManLooks (1).jpg', 
            alt:'Sweater', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            size: ['M', 'L', 'G', 'GG'],
            color: ['Light Brown', 'Gray', 'White'],
            price: 8000
        },{ 
            id: '5', 
            name: 'SUNGLASS MODERN', 
            path: '/images/sunglasses (1).jpg', 
            alt:'SunglassModern', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            size: ['Single'],
            color: ['Metallic Gray', 'White'],
            price: 4000
        },{ 
            id: '6', 
            name: 'SUNGLASS HIGHLINE', 
            path: '/images/sunglasses (2).jpg', 
            alt:'SunglassHighline', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            size: ['Single'],
            color: ['White', 'Black'],
            price: 40000
        },{ 
            id: '7', 
            name: 'THE BLACK WATCH', 
            path: '/images/watches (2).jpg', 
            alt:'TheBlackWatch', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            size: ['Single'],
            color: ['Black'],
            price: 20000
        },{ 
            id: '8', 
            name: 'SHIRT', 
            path: '/images/Woman.jpg', 
            alt:'Shirt', 
            description:'LOREM AYSASDJASDASDASDASDasdsdas', 
            size: ['M','L'],
            color: ['White', 'Green', 'Blue'],
            price: 27000
        },
        
    ]

    return response.json(products)
}
