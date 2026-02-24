import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import HomePage from './landing_page/home/Homepage.jsx';
import Signup from './landing_page/signup/Signup.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import ProductPage from './landing_page/products/ProductPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import Login from './landing_page/signup/Login.jsx';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path='/product' element={<ProductPage></ProductPage>}></Route>
          <Route path='/pricing' element={<PricingPage></PricingPage>}></Route>
          <Route path='/support' element={<SupportPage></SupportPage>}></Route>   
          <Route path='*' element={<NotFound></NotFound>}></Route>  
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;