import { NextApiRequest, NextApiResponse } from "next";


export default (request: NextApiRequest, response: NextApiResponse) => {
    const productsCart = []

    if(request.method === 'POST') {
        productsCart.push(request.body)
    }

    return response.json(productsCart)
}
