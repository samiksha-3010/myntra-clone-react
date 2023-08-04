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

      

    


      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
