import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className='screen'>
        <div className='navbar'>
            <div id="logo">
                <img style= {{height: "60px",width: "100%"}}src="https://www.adgully.com/img/800/201704/myntra-logo.jpg"/>
            </div>
            <div className='product'>
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
                <p>profile</p>
                <i class="fa-solid fa-user"></i>
                <p>wishlist</p>
                <i class="fa-solid fa-heart"></i>
                <p>Cart</p>

                <i class="fa-solid fa-cart-shopping"></i>

            </div>
        </div>
        </div>

                                                
               
                       

                   
      
      
      </div>
  )
}

export default Navbar