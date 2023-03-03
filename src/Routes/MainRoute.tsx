import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Maindash from '../Components/MainDash/Maindash';
import Login from '../Page/Login';
import HomePage from './../Components/Home/HomePage';
import Signup from './../Page/Signup';

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
   <Route  path="/login" element={<Login/>}/>
        <Route  path="/signup" element={<Signup/>}/>
        <Route  path="/gamecontrol" element={<Maindash />}/>
      </Routes>

    </div>
  )
}

export default MainRoute
