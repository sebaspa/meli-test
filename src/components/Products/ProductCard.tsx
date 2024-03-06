import { Link } from 'react-router-dom'
import { FaTruck } from 'react-icons/fa'

import './ProductCard.scss'
import { type ProductSimple } from '../../types/product'

interface Props {
  product: ProductSimple
}

const ProductCard = ({ product }: Props): JSX.Element => {
  const { image, price, title, officialStoreName, domainId, currencyId } = product
  return (
    <>
      <Link className="product-card" to={`/items/${product.id}`}>
        <img className='product-card__image' src={image} alt="image" />
        <div className="product-card__description">
          <p className="price">
            {price.toLocaleString('es-AR', { style: 'currency', currency: currencyId })}
            <span className="icon">
              <FaTruck />
            </span>
          </p>
          <p className="description">{title}.</p>
          <p className='detail'>{officialStoreName}.</p>
        </div>
        <div className="product-card__location">
          <p className="city">{domainId}.</p>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
