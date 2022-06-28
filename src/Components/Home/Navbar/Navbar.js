import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  
  return (
    <div>
        <nav className="navbar bg-light shadow-sm p-3 mb-0 bg-body rounded">
            <div className="container-sm">
                <Link to="/" className="navbar-brand"><h1>TuToTn</h1></Link>

                <div className="d-flex">
                  <Link to="/identifier" className="btn btn-outline-secondary me-2">
                    <b><i className="bi bi-person-circle"></i>
                      {screenSize.dynamicWidth<=511 ? "":<span> S'identifier</span>}
                    </b>
                  </Link>
                  <Link to="/Creer" className="btn btn-outline-primary">
                    <b><i className="bi bi-person-plus"></i>
                    {screenSize.dynamicWidth<=511 ? "":<span> Créer un compte</span>}
                    </b>
                  </Link>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar