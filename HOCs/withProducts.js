import React, { useCallback, useEffect, useState } from 'react'
import { getProducts } from '../services'

const GetProducts = (Components) => {

    function FetchProducts() {
        const test = 'products'
        const [products, setProducts] = useState([])
        // cobs
        const [loading, setLoading] = useState(false)

        const fetchData = useCallback(async () => {
            const data = await getProducts()
            return data?.products
        }, [])
        useEffect(() => {
            console.log('fetchData()')
        }, [])
        return (<Components test={test} products={products} loading={loading} />)
    }
    return FetchProducts
}
export default GetProducts
