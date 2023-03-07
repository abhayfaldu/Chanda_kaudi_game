import { Box, Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

interface JoinChatRoomProps {
	joinRoom: () => void;
	handleRoomInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleUserNameInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const JoinChatRoom = (props: JoinChatRoomProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { joinRoom, handleUserNameInputChange, handleRoomInputChange } = props;
	useColorModeValue("gray.100", "gray.900");

	return (
		<Flex
			flexDir={"column"}
			maxW={"xl"}
			className="chat_container"
			gap={2}
			align="center"
			m='auto'
		>
			<Heading size="md">Join a chat</Heading>
			<Input
				type="text"
				placeholder="Enter you name"
				onChange={e => handleUserNameInputChange(e)}
			/>
			<Input
				type="text"
				placeholder="Enter room id"
				onChange={e => handleRoomInputChange(e)}
			/>
			<Button _hover={{backgroundColor: 'green'}} onClick={joinRoom}>Join a room</Button>
		</Flex>
	);
};

export default JoinChatRoom;
