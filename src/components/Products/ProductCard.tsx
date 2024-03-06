import { Link } from 'react-router-dom'
import { FaTruck } from 'react-icons/fa'

import './ProductCard.scss'
import { type ProductSimple } from '../../types/product'

interface Props {
  product: ProductSimple
}

const ProductCard = ({ product }: Props): JSX.Element => {
  const { image, price, title, officialStoreName, domainId } = product
  return (
    <>
      <Link to={`/items/${product.id}`}>
        <div className="product-card">
          <img className='product-card__image' src={image} alt="image" />
          <div className="product-card__description">
            <p className="price">
              {price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
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
        </div>
      </Link>
    </>
  )
}

export default ProductCard
