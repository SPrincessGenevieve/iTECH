import Dashboard from "./pages/Dashboard"
import Violation from "./pages/profile"
import Profile from "./pages/enrollees"
import History from "./pages/enroll"
import { Route, Routes } from "react-router-dom"
import Login from "./login/index.js"
import './App.css'
import Navbar from "./Navbar"

function RouterPage() {
  return (
      <div>
        <Navbar></Navbar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/violation" element={<Violation />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            
          </Routes>
      </div>

  )
}

export default RouterPage