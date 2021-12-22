import './App.css';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage'
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import InformationPage from './Pages/InformationPage';

import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/header'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="information" element={<InformationPage/>} />
        <Route path="cartpage" element={<CartPage/>} />
      </Routes>

    </BrowserRouter>
  
  )
}

export default App;
