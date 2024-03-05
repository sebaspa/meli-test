import { Breadcrumb, Header } from './components'

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
      </div>
    </>
  )
}
