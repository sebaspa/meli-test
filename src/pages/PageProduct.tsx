import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb, Header, ProductDetail, ProductDetailSkeleton, Seo } from '../components'
import { getProduct } from '../api/products'

import type { ProductSingle } from '../types/product'

const PageProduct = (): JSX.Element => {
  const [product, setProduct] = useState<ProductSingle | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const params = useParams()
  const id = params.id

  if (id === undefined) {
    window.location.href = '/'
  }

  useEffect(() => {
    setIsLoading(true)
    const getProductFromApi = async (): Promise<void> => {
      if (id === undefined) return
      const product = await getProduct(id)
      setProduct(product)
      setIsLoading(false)
    }
    getProductFromApi().catch(console.error)
  }, [])

  return (
    <>
    <Seo
      title={`Meli - ${product?.title}`}
      description="Product page"
      name="description"
      type="article"
      href={`/items/${id}`}
    />
      <Header />
      <div className="container">
        <Breadcrumb />
        {isLoading && <ProductDetailSkeleton />}
        {product !== null && <ProductDetail product={product} />}
      </div>
    </>
  )
}

export default PageProduct
