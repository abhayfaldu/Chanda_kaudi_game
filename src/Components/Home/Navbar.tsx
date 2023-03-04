import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../../Utils/Logo_Chanda_Kaudi.png'

import { useDispatch, useSelector } from "react-redux/es/exports";
import { auth_logout } from "../../Redux/User/action";
import { useNavigate } from "react-router-dom";
import { stateType } from "../../Redux/User/reducer";
import { useEffect } from 'react';

type Props = {};




const NavLink = ({ children }: { children: ReactNode }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
   >
    {children}
  </Box>
);

export default function Navbar(props: Props) {
  const dispatch: any = useDispatch();
  const state: stateType = useSelector((state: any) => state.AuthManager);
  const { isAuth } = state;
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLogout=()=> {
    localStorage.removeItem("userloggedin")
    navigate("/login")
  }
 
const value = JSON.parse(localStorage.getItem('userloggedin')as string)|| "email"
 console.log(value.length)

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link to ="/">
            <Avatar
                    size={'lg'}
                    src={logo}
                  /></Link></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

            <Link to = "/signup"><Button colorScheme='red'  >
                 Signup
                 
            </Button></Link>


              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://tse1.mm.bing.net/th?id=OIP.iZBIqwzEVRVABv25Z2lkswHaHa&pid=Api&P=0'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://tse1.mm.bing.net/th?id=OIP.iZBIqwzEVRVABv25Z2lkswHaHa&pid=Api&P=0'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{value.email}</p>
                  </Center>
                  <br />
                  <MenuDivider />
     {value.length>0 ? <Link to = "/login">
            <Button className="link"
            marginTop={"30px"}
            variant={"outline"}
            >Login</Button></Link> :
                  <Button className="link"
            marginTop={"30px"}
            variant={"outline"}
            onClick = {handleLogout}
            >Logout</Button>
            
            }
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}