import { Logo, Search } from '../../components'

import './header.scss'

const Header = (): JSX.Element => {
  return (
    <>
      <div id="header">
        <div className="container">
          <Logo size='small' />
          <Search />
        </div>
      </div>
    </>
  )
}

export default Header
