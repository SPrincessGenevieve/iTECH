import Dashboard from "./pages/Dashboard.js"
import { Route, Routes } from "react-router-dom"
import Login from "./login/index.js"
import './App.css'
import Enroll from "./pages/enroll.js"
import Enrollees from "./pages/enrollees.js"
import Profiles from "./pages/profile.js"



function App() {
  return (

      <div className="app">

        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        

        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/enrollees" element={<Enrollees />} />
            <Route path="/profile" element={<Profiles />} />
        </Routes>
      </div>

  )
}



export default App
