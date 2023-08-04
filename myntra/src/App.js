import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
      <Route exact path='/'element={<Home/>}/>
    


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
