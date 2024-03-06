import { useEffect, useState } from 'react'
import { Header, ProductsList } from '../components'
import { getProducts } from '../api/products'
import type { Product } from '../types/product'

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const getProductsFromApi = async (): Promise<void> => {
      const productsFromApi = await getProducts()
      setProducts(productsFromApi)
    }

    getProductsFromApi().catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <ProductsList products={products} />
      </div>
    </>
  )
}

export default Home
