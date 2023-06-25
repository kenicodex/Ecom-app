import axios from "axios"

const fetcher = axios.create({
    baseURL: 'https://dummyjson.com/',
})
const getProducts = async ({ limit = 10 }) => {
    const { data: products } = await fetcher.get(`products?limit=${limit}`)
    return products
}
export { getProducts }