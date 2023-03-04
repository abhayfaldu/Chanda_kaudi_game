import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { socketType } from "../../App";
import "./Chat.module.css";

interface ChatProps {
	socket: socketType;
	userName: string;
	room: string;
}

export interface MessageDataType {
	room: string;
	author: string;
	message: string;
	time: string;
}

const Chat = (props: ChatProps) => {
	const { socket, userName, room } = props;
	const [currentMessage, setCurrentMessage] = useState<string>("");
	const [messageList, setMessageList] = useState<MessageDataType[]>([]);

	const messageBlobBGColor: string = useColorModeValue("gray.900", "gray.100");
	const messageTextColor: string = useColorModeValue("gray.100", "gray.900");
	const messageMetaColor: string = useColorModeValue("gray.300", "gray.600");

	const sendMessage = async () => {
		if (currentMessage !== "") {
			const messageData: MessageDataType = {
				room,
				author: userName,
				message: currentMessage.trim(),
				time: `${new Date(Date.now()).getHours()}:${new Date(
					Date.now()
				).getMinutes()}`,
			};
			try {
				await socket.emit("send_message", messageData);
				setMessageList(list => [...list, messageData]);
			} catch (err) {
				console.log("something went wrong");
			}
		}
		setCurrentMessage("");
	};

	useEffect(() => {
		// console.log("triggered");
		socket.on("receive_message", (message: MessageDataType) => {
			setMessageList(list => [...list, message]);
		});
	}, [socket]);

	return (
		<Flex
			flexDir={"column"}
			maxW={"20rem"}
			align="stretch"
			margin={"auto"}
			borderBottomRightRadius="8px"
			borderBottomLeftRadius="8px"
		>
			<Heading
				size={"md"}
				className="chat__header"
				textAlign={"center"}
				bgColor="#5555"
				p={2}
				border="0.5px solid #eee5"
				borderTopRightRadius="8px"
				borderTopLeftRadius="8px"
			>
				Live Chat
			</Heading>
			<Flex
				className="chat__body"
				h={"30rem"}
				border="0.5px solid #eee5"
				borderBottomRightRadius="8px"
				borderBottomLeftRadius="8px"
				flexDir="column"
				align={"stretch"}
				overflowY={"auto"}
				p={3}
			>
				{messageList.map((messageContent, i) => (
					<Flex
						key={i}
						w="100%"
						justify={messageContent.author === userName ? "right" : "left"}
					>
						<Flex
							py={1}
							px={2}
							flexDir={"column"}
							textAlign="left"
							minW={"7rem"}
							maxW="17rem"
							mb={2}
							borderTopLeftRadius={"8px"}
							borderTopRightRadius={"8px"}
							borderBottomRightRadius={
								messageContent.author === userName ? "0px" : "8px"
							}
							borderBottomLeftRadius={
								messageContent.author === userName ? "8px" : "0px"
							}
							bgColor={messageBlobBGColor}
						>
							<Box>
								<Text color={messageTextColor}>{messageContent.message}</Text>
							</Box>
							<Flex
								color={messageMetaColor}
								fontSize={"12px"}
								justify={"space-between"}
							>
								<Text>{messageContent.time}</Text>
								<Text>{messageContent.author}</Text>
							</Flex>
						</Flex>
					</Flex>
				))}
			</Flex>
			<Flex className="chat__footer" gap={1} mt={1}>
				<Input
					flex={2}
					type="text"
					value={currentMessage}
					placeholder="Type a message"
					onChange={e => setCurrentMessage(e.target.value)}
					onKeyPress={e => {
						e.key === "Enter" && sendMessage();
					}}
				/>
				<Button _hover={{ backgroundColor: "green" }} onClick={sendMessage}>
					<AiOutlineSend />
				</Button>
			</Flex>
		</Flex>
	);
};

export default Chat;
