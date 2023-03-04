import React, { useState } from "react";
import {
  Text,
  SimpleGrid,
  Box,
  Input,
  Checkbox,
  Flex,
  Link,
  Image,
  Alert,
  AlertIcon,
  Grid,
  GridItem,
  useToast,
  Button,
} from "@chakra-ui/react";
import "../styles/Login.css";
import admin from "../Utils/photo.avif";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { stateType } from "../Redux/User/reducer";
import { auth_login } from "../Redux/User/action";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";

interface Props {
  email: string;
  password: string;
}

const formData: Props = {
  email: "",
  password: "",
};

const Login = () => {
  // State maintained for Input tags
  const [Form, setForm] = useState<Props>(formData);
  const navigate = useNavigate();
  const state: stateType = useSelector((state: any) => state.AuthManager);
  const { isAuth, loading, error } = state;


  //Login Success toast
  const toast = useToast({
    title: `Login Successful`,
    status: "success",
    isClosable: true,
    position: "top",
  });

  //Partially filled form
  const partial = useToast({
    title: `User not Exists`,
    status: "warning",
    isClosable: true,
    position: "top",
  });

  //Error Loggin In
  const Error = useToast({
    title: `Error! Wrong Email or Password`,
    status: "error",
    isClosable: true,
    position: "top",
  });

  //Login API call

  const dispatch: any = useDispatch();

  // const handleSubmit = () => {
  //   if (Form.email == "" || Form.password == "") {
  //     partial();
  //   } else {
  //     dispatch(auth_login(Form.email, Form.password));
  //     toast()
  //     navigate("/");
  //   }
  // };
  let data: Props[] = JSON.parse(localStorage.getItem("User") || "[]");

const handleSubmit = (): void => {
  console.log(Form.email , Form.password)
  let b = false;

  for (let i = 0; i < data.length; i++) {
    if (data[i].email === Form.email) {
      if (data[i].password === Form.password) {
        toast()
        b = true;
        localStorage.setItem("userloggedin", JSON.stringify(data[i]));
       navigate("/")
        return;
      } else {
        
        Error()
        return;
      }
    }
  }

  if (b === false) {
   partial()
  }
};


  return (
    <>
    {/* <Navbar/> */}
   
    <Flex align="center" justifyContent={"center"} >
      

<Flex w="fit-content"
     flexDirection={["column","column","row","row"]} gap={["10px","10px","100px","200px"]} p="10" >

<Box   >
          <Image src={admin} w="100%" h={["300px","300px","80%","100%"]} alt="game" borderRadius={20}/>
        </Box>
<Box className="formbox" >
          <Text fontSize={"2xl"} fontWeight={"bold"} marginBottom={"15px"}>
            LOG INTO YOUR ACCOUNT
          </Text>
          <form>
            <Text className="Tags">
              Email Address <span style={{ color: "red" }}>*</span>
            </Text>
            <Input
              placeholder="Enter Email address here"
              className="ipbox"
              type={"email"}
              name="email"
              value={Form.email}
              onChange={(e) =>
                setForm({ ...Form, [e.target.name]: e.target.value })
              }
            />
            <Text className="Tags">
              Password <span style={{ color: "red" }}>*</span>
            </Text>
            <Input
              placeholder="Enter Password here"
              className="ipbox"
              type={"password"}
              name="password"
              value={Form.password}
              onChange={(e) =>
                setForm({ ...Form, [e.target.name]: e.target.value })
              }
            />
            <Flex className="forgot">
              <Checkbox defaultChecked colorScheme={"red"}>
                Remember Me
              </Checkbox>
              <Link color="red.600">Forgot Password ?</Link>
            </Flex>

          
            <Button
              bg="red.600"
              className="submit"
              onClick={handleSubmit}
              isLoading={loading}
            >
              Submit
            </Button>
          </form>
        </Box>







</Flex>





    </Flex>
     </>
  );
};

export default Login;
