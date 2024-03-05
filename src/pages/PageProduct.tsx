import { Breadcrumb, Header, Product } from '../components'

const PageProduct = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
        <Product />
      </div>
    </>
  )
}

export default PageProduct
