
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'




const Register = () => {
     const [userData,setUserData] = useState({name: "",email: "",password: "",confirmpassword:"",role: "Buyer"})
     const router = useNavigate();
     const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function selectRole (event){
        setUserData({...userData,["role"]: event.target.value})
        }

    
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.name && userData.email && userData.password && userData.confirmpassword && userData.role) {
        if (userData.password === userData.confirmpassword) {
            const response = await axios.post("http://localhost:8000/register", { userData });
            if (response.data.success) {
                setUserData({ name: "", email: "", password: "", confirmpassword: "", role: "Buyer" })
                router('/login')
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }

        } else {
            toast.error("Password and Confirm Password not Matched.")
        }
    } else {
        toast.error("All fields are mandtory.")
    }
}


  return (
    <div>
         <h2>Register</h2>
         <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input value={userData.name} type='text' name='name' onChange={handleChange} /><br />
                <label>Slect Role:</label><br />
                <select onChange ={selectRole}>
                    <option value="Buyer">Byuer</option>
                    <option value= "Seller">Seller</option>
                </select><br/>
                <label>Email</label><br />
                <input value={userData.email} type='email' name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input value={userData.password} type='password' name='password' onChange={handleChange} /><br />

                <label>Confirm Pasword</label><br />
                <input value={userData.confirmpassword} type='password' name='confirmpassword' onChange={handleChange} /><br />
                <input type='submit' value='Register' /><br />
            </form>
    </div>
  )
}

export default Register;
