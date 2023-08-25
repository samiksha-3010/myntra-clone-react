
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import axios  from 'axios'

const Login = () => {
  
    const { state, dispatch } = useContext(AuthContext);
    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();
    console.log(state,"-state")

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        if ( userData.email && userData.password) {
          
                const response = await axios.post("http://localhost:8000/login", { userData });
                if (response.data.success) {
                
    
                dispatch({
                  type: 'LOGIN',
                  payload: response.data.user
              })
              localStorage.setItem("token", JSON.stringify(response.data.token))
                    setUserData({ email: "", password: "" })
                    router('/')
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
    
           
        } else {
            toast.error("All fields are mandtory.")
        }
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (userData.email && userData.password) {
    //         var flag = false;
    //         const allUsers = JSON.parse(localStorage.getItem("Users"));
    //         for (var i = 0; i <allUsers.length; i++) {
    //             if (allUsers[i].email == userData.email && allUsers[i].password == userData.password) {
    //                 localStorage.setItem("Currrent-user", JSON.stringify(allUsers[i]))
    //                 Login(allUsers[i]);
    //                 setUserData({ email: "", password: "" })
    //                 toast.success("Login Successfull.")
    //                 router('/')
    //                 flag = true;
    //                 break;
    //             }
    //         }
    //         if (flag == false) {
    //             toast.error ("Please Check your email & password.")
    //         }

    //     } else {
    //        toast.error ("Please fill the all fields.")
    //     }
    // }

    return (
        <div style={{width: "30%", height: "550px", border: "2px solid black",backgroundColor: "White", margin: "auto", marginTop:"30px"}}>
           <img  style={{width: "100%",}} src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg'/>
            <form onSubmit={handleSubmit}>

                <label  style={{marginLeft: "50px"}}>E-mail Adress </label><br />
                <input style={{width:"50%",height: "40px",marginLeft: "50px" ,border: "none", borderBottom: "1px solid gray"}} value={userData.email} type='email' onChange={handleChange} name="email" /><br />
                <label  style={{marginLeft: "50px",}}>Password</label><br />
                <input  style={{width:"50%",height: "40px",marginLeft: "50px", border: "none", borderBottom: "1px solid gray"}} value={userData.password} type='password' onChange={handleChange} name='password' /><br />
                <p  style={{marginLeft: "30px", marginTop:"30px"}}>By Counting you agree to our <span style={{color: "red"}}>Term and use</span> and <span style={{color: "red"}}>Privacy& Policy</span></p>
                <span  style={{marginLeft: "50px"}}>haven't register here <p style={{ color: "red",marginLeft: "50px"}}>New Register?</p></span>
                <input style={{width: "50%", height: "40px", borderRadius: "50px", backgroundColor: "red", color: "white", marginLeft: "70px", marginTop: "50px"}} type='submit' value="Login" /><br />

            </form>
        </div>
    )
}

export default Login