import './ProductSkeleton.scss'
const ProductDetailSkeleton = (): JSX.Element => {
  return (
    <div className="productSkeleton">
      <div className="productSkeleton__grid">
        <div className="productSkeleton__image"></div>
        <div>
          <div className="skeletonText"></div>
          <div className="skeletonText" style={{ height: '80px' }}></div>
          <br />
          <div className="skeletonText" style={{ height: '60px' }}></div>
          <br />
          <div className="skeletonText" style={{ height: '50px' }}></div>
        </div>
      </div>
      <div>
        <div className="skeletonText" style={{ height: '30px' }}></div>
        <br />
        <div className="skeletonText" style={{ height: '16px' }}></div>
        <div className="skeletonText" style={{ height: '16px' }}></div>
        <div className="skeletonText" style={{ height: '16px' }}></div>
        <div className="skeletonText" style={{ height: '16px' }}></div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton
