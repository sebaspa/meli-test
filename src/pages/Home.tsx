import { useEffect, useState } from 'react'
import { Header, Pagination, ProductsList, ProductsListSkeleton, Seo } from '../components'
import { getProducts } from '../api/products'
import type { Product } from '../types/product'

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [actualPage, setActualPage] = useState<number>(1)
  const itemsPerPage = 4
  useEffect(() => {
    setIsLoading(true)
    const getProductsFromApi = async (): Promise<void> => {
      const productsFromApi = await getProducts(itemsPerPage, (actualPage * itemsPerPage) - itemsPerPage)
      setProducts(productsFromApi.products)
      setTotalPages(Math.floor(productsFromApi.paging.total / itemsPerPage))
      setIsLoading(false)
    }

    getProductsFromApi().catch(console.error)
  }, [actualPage])

  const onChangePage = (page: number): void => {
    setActualPage(page)
  }

  return (
    <>
      <Seo
        title="Meli - Home"
        description="Home page"
        name="description"
        type="website"
        href="/"
      />
      <Header />
      <div className="container">
        <br />
        {isLoading && <ProductsListSkeleton />}
        <ProductsList products={products} />
        <Pagination
          totalPages={totalPages}
          actualPage={actualPage}
          onChangePage={onChangePage}
        />
      </div>
    </>
  )
}

export default Home
