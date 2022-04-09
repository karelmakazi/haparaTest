import "./Header.css"

import DropMenu from "./DropMenu"
import Navigation from "./Navigation"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <div className="header-bar">
      <div className="header-bar_nav__mob">
        <MobileNav />
      </div>
      <div className="header-bar_nav">
        <Navigation />
      </div>
      <div className="header-bar_menu">
        <DropMenu />
      </div>
    </div>
  )
}

export default Header
