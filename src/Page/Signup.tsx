import React, { useState } from "react";
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Box,
    Stack,
    Image,
    useToast
  } from '@chakra-ui/react';
  import {Link } from 'react-router-dom'
  import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { stateType } from "../Redux/User/reducer";
import { register } from "../Redux/User/action";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";

interface Props {
  email: string;
  password: string;
  name: string;
  image: string;
}
const formData: Props = {
  email: "",
  password: "",
  name:"",
  image:"",
};

  export default function Signup() {

    const [Form, setForm] = useState<Props>(formData);

    const state: stateType = useSelector((state: any) => state.AuthManager);
    const { isAuth, loading, error } = state;
    const navigate = useNavigate();
     
  
    //Login Success toast
     const toast = useToast({
      title: `Signup Successful`,
       status: "success",
       isClosable: true,
       position: "top",
     });
  
    // //Partially filled form
    // const partial = useToast({
    //   title: `Kinldy fill all the detials`,
    //   status: "warning",
    //   isClosable: true,
    //   position: "top",
    // });
  
    // //Error Loggin In
    // const Error = useToast({
    //   title: `Error!`,
    //   status: "error",
    //   isClosable: true,
    //   position: "top",
    // });
  
    //Login API call
  
    const dispatch: any = useDispatch();
  
    // let arr:any[] = JSON.parse(localStorage.getItem("User"))||[]
   

    // const handleSubmit = () => {
    //   // if (Form.email === "" || Form.password === "" || Form.name === "" || Form.image === "") {
    //   //   partial();
    //   // } else {
       
    //   // dispatch(register(Form.email, Form.password , Form.name , Form.image));
    //   //     toast();
    //   //   navigate("/login");
    //   // }
    //   let name = Form.name;
    //   let email = Form.email;
    //   let image = Form.image;
    //   let password  = Form.password;
    //   const payload = {
    //     name,
    //     email,
    //     image, 
    //     password,
    //   }
    //   console.log(payload)

    //   arr.push(payload)
    //   localStorage.setItem("User" , JSON.stringify(arr))

    // };
    let arr: Props[] = JSON.parse(localStorage.getItem("User") as string) || [];

const handleSubmit = (): void => {
  let name: string = Form.name;
  let email: string = Form.email;
  let image: string = Form.image;
  let password: string = Form.password;

  const payload: Props = {
    name: name,
    email: email,
    image: image,
    password: password,
  }

  console.log(payload);

  arr.push(payload);
  localStorage.setItem("User", JSON.stringify(arr));
 toast()
  navigate("/login")
}
    

    return (
      <>
      {/* <Navbar/> */}
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign Up to your account</Heading>
            <FormControl id="name">
              <FormLabel>Full Name</FormLabel>
              <Input type="text" name="name"
              value={Form.name}
              onChange={(e) =>
                setForm({ ...Form, [e.target.name]: e.target.value })
              }/>
            </FormControl>
            <FormControl id="image">
              <FormLabel>Image Url</FormLabel>
              <Input type="Url" name="image"
              value={Form.image}
              onChange={(e) =>
                setForm({ ...Form, [e.target.name]: e.target.value })
              }/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email"
              value={Form.email}
              onChange={(e) =>
                setForm({ ...Form, [e.target.name]: e.target.value })
              }/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password"
              value={Form.password}
              onChange={(e) =>
                setForm({ ...Form, [e.target.name]: e.target.value })
              }/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Box onClick={() => navigate("/login")} color={'red.500'}>Already Have an account?</Box>
              </Stack>
              {/* <Link to = "/login"> */}
              <Button w="full" colorScheme={'red'} variant={'solid'}  onClick={handleSubmit}
              isLoading={loading}>
                Submit 
              </Button>
              {/* </Link> */}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
      </>
    );
  }