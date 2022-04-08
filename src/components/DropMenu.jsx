import React, { useEffect, useRef } from "react"
import './DropMenu.css' 
import menuContent from "../menuContent/menuContent"
import { useOutsideClick } from "../useOutsideClick/useOutsideClick"
import VectorDisplay from "./VectorDisplay"

const DropMenu = ()=> {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, false)
  const onClick = ()=> setIsActive(!isActive)
  
  const viewMode = 'teacher'
  const menuHeader = (viewMode === 'teacher') ? 'student@school.org' : 'teacher@school.org'


  return (
    <div className="dd-menu-container">
      <button className="dd-menu-trigger " onClick={onClick}>
        <span className={`${isActive ? 'active' : 'inactive'}`}>{menuHeader}</span>
        <VectorDisplay vector={'arrow'} uiState={`${isActive ? 'open' : 'closed'}`} />
      </button>

      <nav ref={dropDownRef} className={`dd-menu ${isActive ? 'active' : 'inactive'}`}>

        <ul>
          <li>{menuHeader}</li>
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