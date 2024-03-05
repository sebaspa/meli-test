import { Breadcrumb, Header, ProductsList } from '../components'

const PageSearch = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
        <ProductsList />
      </div>
    </>
  )
}

export default PageSearch
