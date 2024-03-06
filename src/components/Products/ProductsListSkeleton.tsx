import './ProductListSkeleton.scss'
const ProductsListSkeleton = (): JSX.Element => {
  return (
    <div className="productsListSkeleton">
      <div className="productCard">
        <div className="productCard__image"></div>
        <div>
          <div className="skeletonText" style={{ height: '40px', marginBottom: '32px' }}></div>
          <div className="skeletonText" style={{ height: '24px' }}></div>
          <div className="skeletonText" style={{ height: '24px' }}></div>
        </div>
        <div className="skeletonText" style={{ height: '14px' }}></div>
      </div>
      <div className="productCard">
        <div className="productCard__image"></div>
        <div>
          <div className="skeletonText" style={{ height: '40px', marginBottom: '32px' }}></div>
          <div className="skeletonText" style={{ height: '24px' }}></div>
          <div className="skeletonText" style={{ height: '24px' }}></div>
        </div>
        <div className="skeletonText" style={{ height: '14px' }}></div>
      </div>
      <div className="productCard">
        <div className="productCard__image"></div>
        <div>
          <div className="skeletonText" style={{ height: '40px', marginBottom: '32px' }}></div>
          <div className="skeletonText" style={{ height: '24px' }}></div>
          <div className="skeletonText" style={{ height: '24px' }}></div>
        </div>
        <div className="skeletonText" style={{ height: '14px' }}></div>
      </div>
      <div className="productCard">
        <div className="productCard__image"></div>
        <div>
          <div className="skeletonText" style={{ height: '40px', marginBottom: '32px' }}></div>
          <div className="skeletonText" style={{ height: '24px' }}></div>
          <div className="skeletonText" style={{ height: '24px' }}></div>
        </div>
        <div className="skeletonText" style={{ height: '14px' }}></div>
      </div>
    </div>
  )
}

export default ProductsListSkeleton
