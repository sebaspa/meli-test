import { useEffect, useState } from 'react'
import { Header, ProductsList, ProductsListSkeleton } from '../components'
import { getProducts } from '../api/products'
import type { Product } from '../types/product'

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    setIsLoading(true)
    const getProductsFromApi = async (): Promise<void> => {
      const productsFromApi = await getProducts()
      setProducts(productsFromApi)
      setIsLoading(false)
    }

    getProductsFromApi().catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <br />
        {isLoading && <ProductsListSkeleton />}
        <ProductsList products={products} />
      </div>
    </>
  )
}

export default Home
