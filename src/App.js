import React, { useState } from "react"
import { Context } from "./context/Context"

// import "./App.css"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import DropMenu from "./components/DropMenu"
import VectorDisplay from "./components/VectorDisplay"

function App() {
  const [teacherAccount, setAccount] = useState(true)

  return (
    <div className="app">
      <Context.Provider value={[teacherAccount, setAccount]}>
        <Header>
          <VectorDisplay />
          <Navigation />
          <DropMenu />
        </Header>
      </Context.Provider>
    </div>
  )
}

export default App
