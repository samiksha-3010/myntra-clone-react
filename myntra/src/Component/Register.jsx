// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import {toast} from 'react-hot-toast'



//  const Register = () => {
//     const [userData, setUserData] = useState ({name: "", email: "",password:"",role: "Buyer"});
//     const router = useNavigate();

//      console.log(userData,"-setUserData")

//      const handleChange = (event) =>{
//         setUserData({...userData,[event.target.name]: event.target.value})
//      }
//      const handleSubmit = (event) =>{
//         event.preeventDefault();
//         if(userData.name && userData.email && userData.password){
//             const usersArray = JSON.parse(localStorage.getItem("Users"))
//             usersArray.psuh(userData);
//             localStorage.setItem("Users",JSON.stringify(usersArray))
//             setUserData({name: "", email: "",password:"",role: "Buyer"})
//            router ('/login')
//            toast. success("Registration success...")
//         }else{
//             toast.error("please fill all field...")
//         }
//      }
//      function selectRole(event){
//         // console.log(event.target.value,"-role")
//         setUserData({...userData,["role"]:event.target.value})
//      }

//   return (
//     <div  style={{width: "30%", height:"400px", border: "1px solid black"}}>
//    <h2>Register page
//     <form  onSubmit={handleSubmit}>
//         <lable>Name:</lable><br/>
//         <input  type='text' name='name' onChange={handleChange}/><br/>
//         <lable>Role:</lable><br/>
//         <select  onChange={selectRole}>
//             <option>Seller</option>
//             <option>Buyer</option>
//         </select><br/>
//         <lable>Email:</lable><br/>
//         <input type='email' name='email' onChange={handleChange}/><br/>
//         <lable>Password</lable><br/>
//         <input type='password' name='password' onChange={handleChange}/><br/>
//         <input  type='submit'value='register'/><br/>
//     </form>
//    </h2>

//     </div>
//   );
// };
// export default Register


import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: "Buyer" });

    const router = useNavigate();

    console.log(userData, "userData")
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            const usersArray = JSON.parse(localStorage.getItem("Users")) || [];
            usersArray.push(userData);
            localStorage.setItem("Users", JSON.stringify(usersArray))
            setUserData({ name: "", email: "", password: "", role: "Buyer",cart: [] })
            // router('/login');
            toast.success("Registration Successfull.")
        } else {
            toast.error("Please fill the all fields.")
        }
    }

    function selectRole(event) {
        // console.log(event.target.value, "- role")
        setUserData({ ...userData, ["role"]: event.target.value })
    }



    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label><br />
                <input value={userData.name} type='text' onChange={handleChange} name="name" /><br />
                <label>Select Role :</label><br />
                <select onChange={selectRole} >
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                </select><br />
                <label>Email :</label><br />
                <input value={userData.email} type='email' onChange={handleChange} name='email' /><br />
                <label>Password :</label><br />
                <input value={userData.password} type='password' onChange={handleChange} name='password' /><br />
                <input type='submit' value='Register' /><br />
            </form>
        </div>
    )
}

export default Register;

