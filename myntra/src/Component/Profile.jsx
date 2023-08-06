





import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
 import { AuthContext } from './Context/AuthContext';
 import './Profile.css'
;

const Profile = () => {

    const { Login, state } = useContext(AuthContext)

    const [userData, setUserData] = useState({});
    const router = useNavigate()

    console.log(userData, "userData")

    // useEffect(() => {
    //     if (!state?.user?.name) {
    //         router('/login')
    //     }
    // }, [state])

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("Currrent-user"));
        // if (!currentUser) {
        //     router("/login")
        // }
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        if (currentUser && allUsers) {
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                    setUserData(allUsers[i])
                }
            }
        }
    }, [])

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("Currrent-user"));
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                allUsers[i].name = userData.name;
                allUsers[i].password = userData.password;
                currentUser.password = userData.password;
                currentUser.name = userData.name;
            }
        }
        Login(currentUser)
        localStorage.setItem("Currrent-user", JSON.stringify(currentUser))
        localStorage.setItem("Users", JSON.stringify(allUsers))
        setUserData({})
        alert("Profile updated.")
    }


    return (
        <div  style={{width:"100", height:"1000px",border: "1px solid black", display: "flex" , justifyContent: "space-around"}}>
            <div  style={{width: "50%",border:"1px solid black"}}>
           {/* ********************************** */}
           
    <div id="Profile">

<div id="div">

    <div>
        <h4>Account</h4>

        <span>Samiksha</span>

    </div>

    <div id="profilepage">
        {/* LEFT  */}

        <div>
            <div>


                <div>Overview</div>
                <div>
                    <h5>ORDERS</h5>
                    <div>Orders & Returns</div>
                </div>
                <div>
                    <h5>CREDIT</h5>
                    <div>Coupans</div>
                    <div>MyntraCredit</div>
                    <div>Myncash</div>
                </div>
                <div>
                    <h5>ACCOUNT</h5>
                    <div><strong  style={{color:"#14cda8;"}}>Profile</strong></div>
                    <div>Saved Cards</div>
                    <div>Addresses</div>
                    <div>Myntra Insiders</div>

                </div>
                <div>
                    <h5>LEGAL</h5>
                    <div>Terms of Use</div>
                    <div>Privacy Policies</div>


                </div>



            </div>


        </div>


            </div>

            {/* ******************* */}









            {/* right section */}

            
        <div style={{width: "25%",height: "300px", border: "1px solid red",margin:"auto", marginTop: "30px",borderRadius:"50px",backgroundColor:"pink"}}>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>Change Name</label><br />
                <input style={{width:"60%",height:"40px", border:"none",color:"black"}} type='text' value={userData.name} name="name" onChange={handleChange} /><br />
                <label>Change Password</label><br />
                <input style={{width:"60%",height:"40px", border:"none",color:"black"}} type='text' value={userData.password} name="password" onChange={handleChange} /><br />
                <input type='submit'/>
            </form>

        </div>
         </div> 
         </div>
         </div>
         </div>
    )
}

export default Profile