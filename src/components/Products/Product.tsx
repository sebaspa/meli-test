import './Product.scss'

const Product = (): JSX.Element => {
  return (
    <div className='product'>
      <div className="product__grid">
        <img src="https://dummyimage.com/1000x500/cecece/fff" className='product__image' alt="product" />
        <div className="productDescription">
          <p className='productDescription__sold'>New  - xxx sold</p>
          <p className="productDescription__title">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="productDescription__price">$1980.00</p>
          <button className='productDescription__button'>Comprar</button>
        </div>
      </div>
      <div className="productDetail">
        <p className="productDetail__title">Descripción del producto</p>
        <p className="productDetail__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque doloribus modi tenetur sequi veritatis delectus quia vitae fugit quis aliquid architecto rerum cupiditate, expedita eveniet optio distinctio alias atque.
        </p>
      </div>
    </div>
  )
}

export default Product
