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
import logo from '../../Utils/logo.jpeg'

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

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Avatar
                    size={'lg'}
                    src={logo}
                  /></Box>

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
                    <p>Abhay Fadul</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}