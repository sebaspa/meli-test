import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Breadcrumb, Header, ProductsList } from '../components'
import type { Product } from '../types/product'
import { getProductsByName } from '../api/products'

const PageSearch = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])
  const [params] = useSearchParams()
  const searchText = params.get('search')

  useEffect(() => {
    if (searchText === null) return
    const getProductsFromApi = async (): Promise<void> => {
      const productsFromApi = await getProductsByName(searchText)
      setProducts(productsFromApi)
    }
    getProductsFromApi().catch(console.error)
  }, [searchText])

  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
        {<ProductsList products={products} />}
      </div>
    </>
  )
}

export default PageSearch
