import { Routes, Route, NavLink, Navigate, Link } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register';
import {useState} from 'react'
import Login from './components/Login';
import Efile from './components/Efile';
import Step1   from './components/Step1';
import Step2 from './components/step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';


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
        <li className="nav-item">
          <NavLink className="nav-link" to="efile">efiling</NavLink>
        </li>
      
        {
                !userLoginStatus ?
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Login</NavLink>
                  </li> :

                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" onClick={() => logOutUser()} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Logout</NavLink>
                  </li>
              }





    
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
       
        <Route path='/efile' element={<Efile />} >
          {/* nested route for html */}
          <Route path="step1" element={<Step1 />} />
          {/* dealing with emprty path in nested routes */}
          <Route path="" element={<Navigate replace to="Step1" />} />

          {/* nested route for javascript */}
          <Route path="step2" element={< Step2 />} />
          <Route path="step3" element={< Step3 />} />
          <Route path="step4" element={< Step4 />} />
          <Route path="step5" element={< Step5 />} />
        </Route>
        <Route path="/login" element={<Login  setUserLoginStatus={setUserLoginStatus} />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    
    </div>
  )
}

export default App;