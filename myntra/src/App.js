import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Register from './Component/Register';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
      <Route exact path='/'element={<Home/>}/>
      <Route exact path='/login'element={<Login/>}/>
      <Route exact path='/register'element={<Register/>}/>
      

    


      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
