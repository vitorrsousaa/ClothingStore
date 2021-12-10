import { NextApiRequest, NextApiResponse } from "next";


export default (request: NextApiRequest, response: NextApiResponse) => {
    const productsCart = []

    if(request.method === 'POST') {
        productsCart.push(request.body)
    }

    console.log(productsCart)


    return response.json(productsCart)
}
