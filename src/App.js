import { Routes, Route, NavLink, Navigate, Link } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register';
import {useState} from 'react'
import Login from './components/Login';
import Efile from './components/efile';

function App(){

    let [userLoginStatus, setUserLoginStatus] = useState('');


    const logOutUser = () => {
      localStorage.clear();
      setUserLoginStatus(false)
      
    }

  return(
    <div >

{/* navbar */}
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">E-Filing</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* link for home */}
        <li className="nav-item">
          <NavLink className="nav-link" to="home">Home</NavLink>
        </li>
      
        {
                !userLoginStatus ?
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Login</Link>
                  </li> :

                  <li className="nav-item">
                    <Link to="/login" className="nav-link" onClick={() => logOutUser()} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Logout</Link>
                  </li>
              }





<li className="nav-item">
        <Link to="/efile" className="nav-link">E-Filing</Link>
      </li>
    
        <li className="nav-item">
          <NavLink className="nav-link" to="register">Register</NavLink>
        </li>

      </ul>

    </div>
  </div>
</nav>
      {/* Create routes for components */}
      <Routes>
        {/* route for home */}

        <Route path="/home" element={<Home />} />
        
        <Route path="/efile" element={< Efile/>} />
        <Route path="/login" element={<Login  setUserLoginStatus={setUserLoginStatus} />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    
    </div>
  )
}

export default App;