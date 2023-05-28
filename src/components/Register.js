
import {useState} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

function Register() {
      <h1 className="display-4 text-info text-center">Welcome to E-Filing app</h1>
  const { register, handleSubmit } = useForm();
 
  
  
  const onFormSubmit = (userObj) => {

     
      //add userObj to formData object
    

      //post req
      axios.post("/user/createuser", userObj)
          .then(res => {
              let resObj = res.data;
              alert(resObj.message)
              //navigate to login component
            
          })
          .catch(err => {
              console.log(err);
              alert("something went wrong")
          })

  }






  return (
      
    <div>
          <p className="display-2 text-center text-primary">REGISTER</p>
      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onFormSubmit)}>
          <input type="text" className="form-control mb-3"  {...register("username")} placeholder="Username" />
          <input type="password" className="form-control mb-3"  {...register("password")} placeholder="Password" />
          <input type="email" className="form-control mb-3"  {...register("email")} placeholder="E-mail" />
          <input type="date" className="form-control mb-3"  {...register("dob")} placeholder="Date of birth" />
        
      
          <button className="btn btn-success">Register</button>
      </form>
   </div>

  )
 
  }
export default Register;