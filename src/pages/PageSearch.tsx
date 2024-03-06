import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Breadcrumb, Header, ProductsList, ProductsListSkeleton } from '../components'
import { getProductsByName } from '../api/products'

import type { Product } from '../types/product'

const PageSearch = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [params] = useSearchParams()
  const searchText = params.get('search')

  useEffect(() => {
    if (searchText === null) return
    setIsLoading(true)
    const getProductsFromApi = async (): Promise<void> => {
      const productsFromApi = await getProductsByName(searchText)
      setProducts(productsFromApi)
      setIsLoading(false)
    }
    getProductsFromApi().catch(console.error)
  }, [searchText])

  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
        {isLoading && <ProductsListSkeleton />}
        <ProductsList products={products} />
      </div>
    </>
  )
}

export default PageSearch
