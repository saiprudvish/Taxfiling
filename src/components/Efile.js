import {Link,NavLink, Outlet} from 'react-router-dom'
import React from 'react'
import './Efile.css'
function Efile (){

    return(

        <div>
        <p className="display-2 text-center text-primary">E-FILING</p>
        
        {/* create links for children
        <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link active" to="step1">STEP1</NavLink>  
        </li>
    
          <li className="nav-item">
          <NavLink className="nav-link" to="step2">STEP2</NavLink>  
        </li>
          
    
         
    
        
        </ul> */}

<ul class="nav nav-pills mx-auto">
  <li class="nav-item mx-2">
    <NavLink class="nav-link active" aria-current="page" to="step1">STEP1</NavLink>
  </li>
  <li class="nav-item mx-2">
    <NavLink class="nav-link active" to="step2">STEP2</NavLink>
  </li>
  <li class="nav-item mx-2">
    <NavLink class="nav-link active" to="step3">STEP3</NavLink>
  </li>
  <li class="nav-item mx-2">
    <NavLink class="nav-link active" to="step4">STEP4</NavLink>
  </li>
  <li class="nav-item mx-2">
    <NavLink class="nav-link active" to="step5">STEP5</NavLink>
  </li>
</ul>
           

        {/* placeholder */}
        <Outlet />
      </div>
    );
}

export default Efile;