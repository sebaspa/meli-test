import ProductCard from './ProductCard'
import './ProductsList.scss'

const ProductsList = (): JSX.Element => {
  return (
    <div id="products-list">
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductsList
