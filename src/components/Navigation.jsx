import React from "react"
import navStructure from "../navContent/navContent"
import './Navigation.css'
import VectorDisplay from "./VectorDisplay"

const Navigation = ()=> {

  const viewMode = 'teacher'
  
  const {teacherNav, studentNav} = navStructure
  const activeNav = (viewMode === 'teacher') ? teacherNav : studentNav

  return (
    <div className="nav-wrapper">
      <div className="nav-icon">
        <VectorDisplay />
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