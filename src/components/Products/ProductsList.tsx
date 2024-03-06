import type { Product } from '../../types/product'
import ProductCard from './ProductCard'
import './ProductsList.scss'

interface Props {
  products: Product[]
}

const ProductsList = ({ products }: Props): JSX.Element => {
  return (
    <div id="products-list">
      {
        products.map(product => (
          <ProductCard key={product.id} product={{
            id: product.id,
            image: product.thumbnail,
            price: product.price,
            title: product.title,
            officialStoreName: product.official_store_name,
            domainId: product.domain_id
          }} />
        ))
      }
    </div>
  )
}

export default ProductsList
