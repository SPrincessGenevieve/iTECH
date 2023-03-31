import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <img className='mini' style={{width: "15%", height: "12%", paddingTop: 10, paddingLeft: 10}} src={require('./Images/mini.png')} />
      <ul>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/enroll">Enroll</CustomLink>
        <CustomLink to="/enrollees">Enrollees</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
      </ul>
      <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginLeft:"45rem"}}> 
        <div >
          <h4>
            Aarone
          </h4>
        </div>
      <div style={{width: 50, height: 50, backgroundColor:"white", borderRadius: 50, marginLeft: 20}}></div>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}