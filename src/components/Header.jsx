import './Header.css'

import DropMenu from './DropMenu'
import Navigation from './Navigation'

const Header = ()=> {

  return (
      <div className='header-bar'>
          <div className='header-bar_nav'>
          <Navigation />
          </div>
          <div className='header-bar_menu'>
            <DropMenu />
          </div>
      </div>
  )
}

export default Header