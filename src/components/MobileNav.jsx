import React, { useContext } from "react"
import { Context } from "../context/Context.js"
import navStructure from "../content/navContent.js"
import "./MobileNav.css"

const MobileNav = () => {
  const [teacherAccount] = useContext(Context)
  const { teacherNav, studentNav } = navStructure
  const activeNav = teacherAccount ? teacherNav : studentNav

  return (
    <div className="hamburger-menu">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span></span>
      </label>

      <ul className="menu-box">
        {activeNav.map((item) => {
          return (
            <li key={item.id}>
              <a className="menu-item" href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileNav
