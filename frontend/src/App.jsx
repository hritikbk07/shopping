import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './commponents/Navbar';
import Footer from './commponents/Footer';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Admindashboard from './admin/Admindashboard';
import AdminProduct from './admin/AdminProduct';
import AddProducts from './admin/AddProducts';
import EditProducts from './admin/EditProducts';
import Contacts from './pages/Contacts';
import AdminQuery from './admin/AdminQuery';




const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<HomePage />}/>
          <Route path = "/LogIn" element = {<LogIn/>}/>
          <Route path = "/reg" element = {<Register/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path = '/contact' element={<Contacts/>}/>
          <Route path='/admin/dashboard' element = {<Admindashboard/>}/>
          <Route path = '/admin/product' element = {<AdminProduct/>}/>
          <Route path='/admin/addproduct' element={<AddProducts/>}/>
          <Route path = '/admin/editproduct' element={<EditProducts/>}/>
          <Route path = '/admin/admin-query' element={<AdminQuery/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
