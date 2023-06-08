import './ItemPreview.css'
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../AccountContext";
import { useParams } from 'react-router';
import {
  HStack, VStack,
  Box,
  Image,
  Img,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  StackDivider,
  ButtonGroup,
  Button,
  Divider
} from '@chakra-ui/react';

const ItemPreview = () => {
  const { user } = useContext<any>(AccountContext);

  const { itemId } = useParams();
  const [ itemProps, setitemProps ] = useState({
    categories: [],
    description: '',
    id: 0,
    img: [''],
    location: '',
    price: 0,
    sold: false,
    time_listed: '',
    title: '',
    username: ''
});
const [ sellerUser, setsellerUser ] = useState({
  username: '',
  id: 0, 
  passhash: '',
  fullname: '',
  location: '',
  bio: '',
  user_since: '',
  picture: ''
})

  // Fetch the item that was clicked on and save it to itemProps via useState
  useEffect(() => {
    fetch(`http://localhost:3001/auth/item-preview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId: itemId }),
    })
      .then(res => res.json())
      .then(data => {
        if (!data) return;
        // The [0] is there because we only want one object and we get that 
        // from the item-preview fetch
        setitemProps([...data][0]);
        console.log("Fetched data : ", data)
      });
  }, [])


  // Fetch the user who is selling the current item
  useEffect(() => {
    fetch(`http://localhost:3001/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // This will get the username of the seller 
      // from the item that the user clicked on
      body: JSON.stringify({ username: 'username' }),
    })
      .then(res => res.json())
      .then(data => {
        if (!data) return;
        // The [0] is there because we only want one object and we get that 
        // from the item-preview fetch
        setsellerUser([...data][0]);
        console.log("What is this", data);
      });
  }, [])


  console.log("Your profile is : ", user);
  console.log("Profile selling item is : ", sellerUser);

  return (
    <HStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >

      <Card maxW='500px'>
        <CardBody>
          <Image
            src={itemProps.img[0]}
            maxW='500px'
          />
          <HStack>
            {/* {itemProps.img.map(pic, index) => {
              return <Image
                      src={pic}
                      maxW='100px'
                     />
            })} */}
          </HStack>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{itemProps.title}</Heading>
            <Text>
              {itemProps.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {itemProps.price},-
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
          <VStack
            w={{ base: "90%", md: "500px" }}
            m="auto"
            justify="center"
            h="100vh"
            spacing="1rem"
          >
          </VStack>
          <VStack spacing='24px'>
            <HStack >
              <Box>
                <Img
                  boxSize='50px'
                  // src={sellerUser.picture}
                  borderRadius='40px'
                  // alt={sellerUser.fullname}
                />
              </Box>
              <Box >
                {user.username}
              </Box>
            </HStack>
          </VStack>
    </HStack>
  )
}

export default ItemPreview; 