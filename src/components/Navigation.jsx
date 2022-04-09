import React, {useContext} from "react"
import './Navigation.css'
import navStructure from '../content/navContent.js'
import VectorDisplay from "./VectorDisplay"

const Navigation = ()=> {

  const viewMode = 'teacher'
  
  const {teacherNav, studentNav} = navStructure
  const activeNav = (viewMode === 'teacher') ? teacherNav : studentNav

  return (
    <div className="nav-wrapper">
      <div className="nav-icon">
        <VectorDisplay vector={'logo'}/>
      </div>
      <div className="navigation">
          {activeNav.map((item)=> {
            return (
              <a className="nav-item" 
                  key={item.id}
                  href={item.url}> {item.title} </a>
            )
          })}
      </div>
    </div>

  )
}

export default Navigation