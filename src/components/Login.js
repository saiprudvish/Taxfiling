import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login(props) {

    

 
    
    const { register, handleSubmit } = useForm();
   

    const onFormSubmit = (credentials) => {

        // make post req
        axios.post(`/${credentials.type}/login`, credentials)
            .then(res => {
                console.log(res)
                //get response object
                let resObj = res.data;
                if (resObj.message === 'login-success') {
                    //save token in local storage
                    localStorage.setItem("token", resObj.token)
                    localStorage.setItem('username', resObj.username)
                    localStorage.setItem("user", JSON.stringify(resObj.userObj))
                    //update userloginstate
                    alert(resObj.message)
                    props.setUserLoginStatus(true)
                    
                        

                 
                }
                else {
                    alert(resObj.message)
                }
            })
            .catch(err => {
                console.log("err in login",err)
                alert("something went wrong in login")
            })


  }




  return (
    <div>
    <p className="display-2 text-center text-primary">Login</p>
    <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onFormSubmit)}>

<div class="form-check">
    <input class="form-check-input" type="radio" id="admin" {...register("type")} value="admin" />
    <label class="form-check-label" for="admin">
        Admin
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="radio" id="user" {...register("type")} value="user" />
    <label class="form-check-label" for="user">
        User
    </label>
</div>



<input type="text" className="form-control mb-3"  {...register("username")} placeholder="Username" />
<input type="password" className="form-control mb-3"  {...register("password")} placeholder="Password" />

<button className="btn btn-primary">Login</button>
</form>
  </div>
  )
}

export default Login