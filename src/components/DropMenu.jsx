import React, { useRef } from "react"
import './DropMenu.css' 
import { useOutsideClick } from "../useOutsideClick/useOutsideClick"
import menuContent from "../menuContent/menuContent"

const DropMenu = ()=> {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, false)
  const onClick = ()=> setIsActive(!isActive) 
  
  const viewMode = 'teacher'
  const menuHeader = (viewMode === 'teacher') ? 'student@school.org' : 'teacher@school.org'


  return (
    <div className="dd-menu-container">
      <button className="dd-menu-trigger" onClick={onClick}>
        <span>{menuHeader}</span>
      </button>

      <nav ref={dropDownRef} className={`dd-menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          {menuContent.map((item)=> {
              return (
                <li  key={item.id}> 
                 <a className="dd-menu-item" href={item.url}> {item.title}</a>
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