import { Breadcrumb, Header, Product, ProductsList } from './components'

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
        <Product />
        <ProductsList />
      </div>
    </>
  )
}
