import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// import SingleProduct from './Context/SingleProduct'

const AddProduct = () => {
  const [productData, setProductData] = useState ({name: "", price: "", image: "", cetegory: "other"})
  const router = useNavigate ();

  const  handlechange = (event) =>{
    setProductData({...productData, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event) =>{
    event.preventDeafult();
    if(productData.name && productData.price && productData.image && productData.cetegory){
      const  producstArray = JSON.parse(localStorage.getItem("Products")) || [];
      const randomId = uuidv4();
       productData["id"] = randomId;
       producstArray.push(productData)
       localStorage.setItem("Products",JSON.stringify(producstArray))
       setProductData ({name: "", price: "", image: "", cetegory: "other"})
       router('/allproduct')
       toast.success("Product added successfull")
    }else{
      toast.error("Please fill all field")
    }
  }
    function  selectRole (event){
      // console.log(event.target.value, "-role")
      setProductData ({...productData,["category"]:event.target.value })
    }

      useEffect(() =>{
        const user = JSON.parse(localStorage.getItem("Current-user"))
        if(user){
          if(user?.role == "Buyer"){
            toast.error("you are not a seller")
            router('/')
          }
        }else{
          toast.error("you are not a logged user")
          router ('login')
        }
      },[])


  return (
    <div>
      <h2>Add product</h2>
      <form  onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input value={productData.name} type='text'  onChange={handlechange} name='name' /><br/>
        <label>Price</label><br/>
        <input  value={productData.price}type='number' onChange={handlechange} name='price'/><br/>
        <label> cetegoary</label><br/>
        <select  onChange={selectRole}>
          <option>Other</option>
          <option>Men,s</option>
          <option>Women,s</option>
          <option>Children</option>
          <option>Electronic</option>
          
          </select><br/>
          <label>Product Image</label><br/>
        <input value={productData.image}type='text' onChange={handlechange} name='image'/><br/>
        <input type='submit' value='Add Product'/><br/>
      </form>



    </div>
  )
}

export default AddProduct

