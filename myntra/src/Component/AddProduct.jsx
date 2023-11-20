
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'
import {toast} from 'react-hot-toast';

const AddProduct = () => {
    const [productData, setProductData] = useState({name: "",price: "", image: "", cetegory:"other" })
    const router = useNavigate();


    const handleChange = (event) => {
        setProductData({... productData,[event.target.name]: event.target.value})  
    }
   const handleSubmit = (event) =>{
    (event).preventDefault();
    if(productData.name && productData.price && productData.image && productData.cetegory ){
        const productsArray = JSON.parse(localStorage.getItem("Products")) || [];

        const randomId = uuidv4();
        productData["id"] = randomId
        productsArray.push(productData);
        localStorage.setItem("Products",JSON.stringify(  productsArray))
        setProductData({name: "",price: "", image: "", cetegory:"other"})

       toast ("product added successfull...")
    } else{
        toast ("please fill all field ...")
    }
   }    
       function selectRole(event){
        // console.log(event.target.value, "-role")
        setProductData({...productData,["cetegory"]:event.target.value})
       }
       useEffect(() =>{
        const user = JSON.parse(localStorage.getItem("Currrent-user"))
        if(user) {
            if (user?.role == "Byuer"){
                alert ("you are not a seller ..")
                router('/')
            }
        }   else{
             toast ("you are not a logged user....")
             router('/login')
        }
       },[])
  return (
    <div  style={{width:"30%",height: "400px",border: "1px solid black", margin:"auto"}}>

        <form onSubmit={ handleSubmit}>
            <h1>Add Product by seller </h1>
             <label  style={{marginLeft: "30px"}}>Product Name:</label><br/>
             <input  style={{width:"50%",height:"40px",marginLeft: "30px" }} value={productData.name} type='text' onChange={handleChange}  name='name'/><br/>
             <label  style={{marginLeft: "30px"}}>Product Price:</label><br/>
             <input style={{width:"50%",height:"40px",marginLeft: "30px" }} value={productData.price} type='number'  onChange={handleChange}  name='price'/><br/>
             <label style={{marginLeft: "30px"}}>Product cetegory:</label><br/>
             <select  style={{width:"50%",height:"40px",marginLeft: "30px" }} onChange ={selectRole}>
               <option value="other">Other</option>
               <option value="Mens">Mens</option>
               <option value="Womens">Womens</option>
               <option value="Children">Children</option>
               <option value="Electronic">Electronic</option>

             </select><br/>
             <lable  style={{marginLeft: "30px"}}> Product Image:</lable><br/>

             <input  style={{width:"50%",height:"40px",marginLeft: "30px" }} value={productData.image} type='text'   onChange={handleChange} name='image'/><br/>
             <input style={{width: "40%", height: "40px", backgroundColor:"black",color: "white", borderRadius:"40px",marginTop: "50px",marginLeft: "30px"}} type='submit'value= 'Add to Product'/><br/>

              </form>



    </div>
  )
}

export default AddProduct;