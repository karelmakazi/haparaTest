import React, { useState, useRef } from "react"
import menuContent from "../menuContent/menuContent"

const DropMenu = ()=> {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  const viewMode = 'teacher'
  const menuHeader = (viewMode === 'teacher') ? 'student@school.org' : 'teacher@school.org'

  const onClick = ()=> setIsActive(!isActive)


  return (
    <div className="menu-wrapper">
      <button className="menu-trigger" onClick={onClick}>
        {`${menuHeader}.school.com`}
      </button>

      <nav ref={dropDownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          {menuContent.map((item)=> {
              return (
                <li  key={item.id}> 
                 <a className="menu-item" href={item.url}> {item.title}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )


}

export default DropMenu