import React, { useRef, useContext } from "react"
import { Context } from "../context/Context"
import menuContent from "../content/menuContent"
import './DropMenu.css' 

import { useOutsideClick } from "../useOutsideClick/useOutsideClick"
import VectorDisplay from "./VectorDisplay"

const DropMenu = ()=> {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, false)
  const [teacherAccount, setAccount] = useContext(Context)

  const currentUser = (teacherAccount) ? 'teacher' : 'student'
  const switchUser = (!teacherAccount) ? 'teacher' : 'student'

  console.log(currentUser)
  console.log(teacherAccount)
   
  const menuHeader = `${currentUser}@school.org`

  const onClick = ()=> setIsActive(!isActive)

  



  return (
    <div className="dd-menu-container">
      <button className="dd-menu-trigger " onClick={onClick}>
        <span className={`${isActive ? 'active' : 'inactive'}`}>{`${currentUser}@school.org`}</span>
        <VectorDisplay vector={'arrow'} uiState={`${isActive ? 'open' : 'closed'}`} />
      </button>

      <nav ref={dropDownRef} className={`dd-menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li className={"dd-menu-header"} onClick={()=> setAccount(!teacherAccount)}><div className="button" 
         >{`${switchUser}@school.org`}</div></li>
          {menuContent.map((item)=> {
              return (
                <li className={"dd-menu-li"} key={item.id}> 
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