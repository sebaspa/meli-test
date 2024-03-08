import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Breadcrumb, Header, Pagination, ProductsList, ProductsListSkeleton, Seo } from '../components'
import { getProductsByName } from '../api/products'

import type { Filters, Product } from '../types/product'

const PageSearch = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<Filters[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [actualPage, setActualPage] = useState<number>(1)
  const [params] = useSearchParams()
  const searchText = params.get('search')

  const itemsPerPage = 4

  useEffect(() => {
    if (searchText === null) return
    setIsLoading(true)
    const getProductsFromApi = async (): Promise<void> => {
      const productsFromApi = await getProductsByName(searchText, itemsPerPage, (actualPage * itemsPerPage) - itemsPerPage)
      setProducts(productsFromApi.products)
      setFilters(productsFromApi.filters)
      setTotalPages(Math.floor(productsFromApi.paging.total / itemsPerPage))
      setIsLoading(false)
    }
    getProductsFromApi().catch(console.error)
  }, [searchText, actualPage])

  const onChangePage = (page: number): void => {
    setActualPage(page)
  }

  return (
    <>
      <Seo
        title={`Meli - Search - ${searchText}`}
        description="Search page"
        name="description"
        type="website"
        href="/items"
      />
      <Header />
      <div className="container">
        <Breadcrumb filters={filters} />
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

export default PageSearch
