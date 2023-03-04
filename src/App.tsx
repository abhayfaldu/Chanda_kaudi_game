import React, { useEffect } from "react";
import "./App.css";

import Navbar from "./Components/Home/Navbar";

import MainRoute from "./Routes/MainRoute";

import Footer from "./Components/Home/Footer";

import { io, Socket } from "socket.io-client";
import { MessageDataType } from "./Components/Chat/Chat";
import { BoardStateType } from "./Components/MainDash/Maindash";
const ENDPOINT = "http://localhost:3001";

export interface ServerToClientEvents {
	receive_message: (message: MessageDataType) => void;
	player_played_server_to_client: (boardState: BoardStateType) => void;
}

export interface ClientToServerEvents {
	join_room: (room: string) => void;
	send_message: (massageData: MessageDataType) => void;
	player_played: (boardState: BoardStateType) => void;
}

export type socketType = Socket<ServerToClientEvents, ClientToServerEvents>;
const socket: socketType = io(ENDPOINT);

export interface GameBoardtype {
	player1: {
		a: [number, number];
		b: [number, number];
		c: [number, number];
		d: [number, number];
	};
	player2: {
		a: [number, number];
		b: [number, number];
		c: [number, number];
		d: [number, number];
	};
	player3: {
		a: [number, number];
		b: [number, number];
		c: [number, number];
		d: [number, number];
	};
	player4: {
		a: [number, number];
		b: [number, number];
		c: [number, number];
		d: [number, number];
	};
}

function App() {
	useEffect(() => {
		let gameboard: GameBoardtype = {
			player1: {
				a: [0, 0],
				b: [0, 0],
				c: [0, 0],
				d: [0, 0],
			},
			player2: {
				a: [0, 4],
				b: [0, 4],
				c: [0, 4],
				d: [0, 4],
			},
			player3: {
				a: [4, 4],
				b: [4, 4],
				c: [4, 4],
				d: [4, 4],
			},
			player4: {
				a: [4, 0],
				b: [4, 0],
				c: [4, 0],
				d: [4, 0],
			},
		};

		localStorage.setItem("gameboard", JSON.stringify(gameboard));
	}, []);

	return (
		<div className="App">
			<Navbar />
			<MainRoute socket={socket} />
			<Footer />
		</div>
	);
}

export default App;
