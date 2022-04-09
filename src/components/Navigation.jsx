import React, { useContext } from "react"
import { Context } from "../context/Context.js"
import navStructure from "../content/navContent.js"
import VectorDisplay from "./VectorDisplay"
import "./Navigation.css"

const Navigation = () => {
  const [teacherAccount] = useContext(Context)
  const { teacherNav, studentNav } = navStructure
  const activeNav = teacherAccount ? teacherNav : studentNav

  return (
    <div className="nav-wrapper">
      <div className="nav-icon">
        <VectorDisplay vector={"logo"} />
      </div>
      <div className="navigation">
        {activeNav.map((item) => {
          return (
            <a className="nav-item" key={item.id} href={item.url}>
              {item.title}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Navigation
