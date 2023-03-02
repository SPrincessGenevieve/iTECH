import { Route, Routes } from "react-router-dom"
import Login from "./login/index.js"
import './App.css'
import Navbar from "./Navbar"

function RouterPage() {
  return (
      <div>
        <Navbar></Navbar>
          <Routes>
          </Routes>
      </div>

  )
}

export default RouterPage