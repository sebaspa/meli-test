import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb, Header, ProductDetail } from '../components'
import { getProduct } from '../api/products'

import type { ProductSingle } from '../types/product'

const PageProduct = (): JSX.Element => {
  const [product, setProduct] = useState<ProductSingle | null>(null)
  const params = useParams()
  const id = params.id

  if (id === undefined) {
    window.location.href = '/'
  }

  useEffect(() => {
    const getProductFromApi = async (): Promise<void> => {
      if (id === undefined) return
      const product = await getProduct(id)
      setProduct(product)
    }
    getProductFromApi().catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
        {product !== null && <ProductDetail product={product} />}
      </div>
    </>
  )
}

export default PageProduct
