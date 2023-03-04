import { Box, Flex, VStack } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { socketType } from "../../App";
import Maindash from "../MainDash/Maindash";
import Chat from "./Chat";
import JoinChatRoom from "./JoinChatRoom";

interface ChatWindowProps {
	socket: socketType;
}

export interface MessageDataType {
	room: string;
	author: string;
	message: string;
	time: string;
}

const ChatWindow = (props: ChatWindowProps) => {
	const { socket } = props;
	const [userName, setUserName] = useState<string>("");
	const [room, setRoom] = useState<string>("");
	const [showChat, setShowChat] = useState<boolean>(false);

	const handleUserNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};

	const handleRoomInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setRoom(e.target.value);
	};

	const joinRoom = async () => {
		if (userName !== "" && room !== "") {
			await socket.emit("join_room", room.trim());
			setShowChat(true);
		}
	};

	return (
		<VStack
			// minH={"35rem"}
			// maxW={"24rem"}
			margin="auto"
			p={4}
			align="center"
			justify={"center"}
		>
			{!showChat ? (
				<Box mb={6} w={"full"}>
					<JoinChatRoom
						joinRoom={joinRoom}
						handleUserNameInputChange={handleUserNameInputChange}
						handleRoomInputChange={handleRoomInputChange}
					/>
				</Box>
			) : (
				<Flex w="full" flexDir={["column","column","row","row"]}>
					<Maindash socket={socket} room={room} />
					<Chat socket={socket} userName={userName} room={room} />
				</Flex>
			)}
		</VStack>
	);
};

export default ChatWindow;
