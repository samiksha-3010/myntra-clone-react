import React, { useContext, useState } from 'react'
import { AuthContext } from './Context/AuthContext'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [userData , setUserData] = useState ({email: "",password: ""})
  const [state, Login] = useContext(AuthContext)
  const router = useNavigate();

  const  handlechange = (event) =>{
    setUserData({...userData,[event.target.name]:event.target.value});
  }
  const handleSubmit = (event) =>{
    event.preventDeafult();
    if(userData.email && userData.password){
    var flag = false;
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for(var i = 0; i < allUsers.length; i ++){
        if(allUsers[i].email == userData.email && allUsers[i].password == allUsers.password){
          localStorage.setItem("Currrent-user",JSON.stringify(allUsers[i]))
          Login(allUsers[i])
          setUserData({email: "",password: ""})
          toast.success("Login Successfull.")
          router('/')
          flag = true
          break;
        }
      }
      if(flag ==false){
        toast.error ("please chek your email and password.....")
      }
    }else{
      toast.error("please fill all field")
    }

  }
  return (
    <div>
        <h2>Login</h2>
        <form  onSubmit={handleSubmit}>

          <lable>Email:</lable><br/>
          <input value= {userData.email} type='email ' name='email' onChange={handlechange}/><br/>
          <lable>Password</lable><br/>
          <input value= {userData.password} type='password'name='password'onChange={handlechange} /><br/>
          <input type='submit' value='login'/><br/>
        </form>
        
    </div>
  )
}

export default Login