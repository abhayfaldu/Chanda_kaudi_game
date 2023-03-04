import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LeaderBoard from '../Components/LeaderBoard';
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
        <Route  path="/leaderboard" element={<LeaderBoard />}/>
      </Routes>

    </div>
  )
}

export default MainRoute
