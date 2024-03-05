import { Link } from 'react-router-dom'
import { FaTruck } from 'react-icons/fa'

import './ProductCard.scss'

const ProductCard = (): JSX.Element => {
  return (
    <>
      <Link to='/items/1'>
        <div className="product-card">
          <img className='product-card__image' src="https://dummyimage.com/180x180/cecece/fff" alt="image" />
          <div className="product-card__description">
            <p className="price">$100.00 <span className="icon"><FaTruck /></span></p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem quae perferendis.</p>
            <p className='detail'>Lorem ipsum dolor sit.</p>
          </div>
          <div className="product-card__location">
            <p className="city">Lorem, ipsum dolor.</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
