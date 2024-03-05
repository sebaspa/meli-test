import { Routes, Route } from 'react-router-dom'
import { Home, PageProduct, PageSearch } from './pages'

export const App = (): JSX.Element => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} index key='home' />
      <Route path='/items' element={<PageSearch />} />
      <Route path='/items/:id' element={<PageProduct />} />
    </Routes>
    </>
  )
}
