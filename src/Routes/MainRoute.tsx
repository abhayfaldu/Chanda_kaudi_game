import React from 'react'
import { socketType } from "../App";
import {Routes,Route} from 'react-router-dom'
import ChatWindow from "../Components/Chat/ChatWindow";
import LeaderBoard from '../Components/LeaderBoard';
import Maindash from '../Components/MainDash/Maindash';
import Login from '../Page/Login';
import HomePage from './../Components/Home/HomePage';
import Signup from './../Page/Signup';

const MainRoute = ({ socket }: { socket: socketType }) => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
      // <Route  path="/gamecontrol" element={<Maindash />}/>
				<Route path="/signup" element={<Signup />} />
				<Route path="/chat" element={<ChatWindow socket={socket} />} />
        <Route  path="/leaderboard" element={<LeaderBoard />}/>
			</Routes>
		</div>
	);
};

export default MainRoute;
