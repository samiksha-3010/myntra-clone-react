import React, { useContext } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import AuthContext from './Context/AuthContext';


const Navbar = () => {
    const router = useNavigate ();
    const {state, dispatch} = useContext(AuthContext);
  return (
    <div>
        <div className='screen'>
        <div className='navbar'>
            <div id="logo">
                <img  style= {{height: "60px",width: "100%"}}src="https://www.adgully.com/img/800/201704/myntra-logo.jpg"  onClick={() => router('/')}/>
            </div>
            <div className='product'>
                <p onClick={() => router('/allproduct')}>AllProduct</p>
                <p>Men,s</p>
                <p>Women,s</p>
                <p>Kid,s</p>
                <p>Home living</p>
                <p>Beauty</p>
                <p>Studio</p>
            </div>
            <div className='search'>
                <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                <input  type="search" placeholder="search for product and brand more"/>
            </div>
            </div>
            <div className='logo2'>
                <p onClick={() => router('/profile')}>profile</p>
                <i class="fa-solid fa-user"></i>
                <p>wishlist</p>
                <i class="fa-solid fa-heart"></i>
                <p onClick={() => router('/cart')}>Cart</p>
                <p onClick={() => router('/addproduct')}>Add product</p>
                <p onClick={() => router('/login')}>Sign/up</p>
                <h4 onClick={() => dispatch({ type: "LOGOUT" })}>Logout</h4>

                <i class="fa-solid fa-cart-shopping"></i>

            </div>
        </div>
        </div>

                                                
               
                       

                   
      
      
      </div>
  )
}

export default Navbar