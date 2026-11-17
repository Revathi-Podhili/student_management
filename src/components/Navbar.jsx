import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <div className="nav-bar">
        <div className="left">
            <h2>Logo</h2>
        </div>
        <div className="right">
            <Link to={"/addstudent"}>ADD</Link>
            <Link to={"/viewstudent"}>VIEW</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar