import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Register from './Component/Register';
import AllProduct from './Component/AllProduct';
import AddProduct from './Component/AddProduct';
import Cart from './Component/Cart';
import Profile from './Component/Profile';
import SingleProduct from './Component/Context/SingleProduct';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
      <Route exact path='/'element={<Home/>}/>
      <Route exact path='/login'element={<Login/>}/>
      <Route exact path='/register'element={<Register/>}/>
      <Route exact path='/cart'element={<Cart/>}/>
      <Route exact path='/addproduct'element={<AddProduct/>}/>
      <Route exact path='/allproduct'element={<AllProduct/>}/>
      <Route exact path='/profile'element={<Profile/>}/>
      <Route exact path='/singleproduct'element={<SingleProduct/>}/>

      

    


      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
