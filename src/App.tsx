import { Breadcrumb, Header, ProductsList } from './components'

export const App = (): JSX.Element => {
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
