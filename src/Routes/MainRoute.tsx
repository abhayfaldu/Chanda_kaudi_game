import React from "react";

import { Route, Routes } from "react-router-dom";
import { socketType } from "../App";
import ChatWindow from "../Components/Chat/ChatWindow";
// import Chat from "../Components/Chat";
import Maindash from "../Components/MainDash/Maindash";
import Login from "../Page/Login";
import HomePage from "./../Components/Home/HomePage";
import Signup from "./../Page/Signup";

const MainRoute = ({ socket }: { socket: socketType }) => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/chat" element={<ChatWindow socket={socket} />} />
			</Routes>
		</div>
	);
};

export default MainRoute;
