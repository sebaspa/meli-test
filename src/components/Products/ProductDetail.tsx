import type { ProductSingle } from '../../types/product'
import './Product.scss'

interface Props {
  product: ProductSingle
}

const ProductDetail = ({ product }: Props): JSX.Element => {
  const { title, price, thumbnail, initial_quantity, descriptions, permalink } = product
  return (
    <div className='product'>
      <div className="product__grid">
        <img src={thumbnail} className='product__image' alt="product" />
        <div className="productDescription">
          <p className='productDescription__sold'>New  - {initial_quantity} sold</p>
          <p className="productDescription__title">{title}.</p>
          <p className="productDescription__price">
            {price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
          </p>
          <a href={permalink} className='productDescription__button' target='_blank' rel="noreferrer">Comprar</a>
        </div>
      </div>
      <div className="productDetail">
        <p className="productDetail__title">Descripción del producto</p>
        <p className="productDetail__description">
          {descriptions[0] !== undefined ? descriptions[0].plain_text : 'No hay descripción disponible'}
        </p>
      </div>
    </div>
  )
}

export default ProductDetail
