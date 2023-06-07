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
        console.log("data: ", data)
      });
  }, [])

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
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            maxW='500px'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
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
                  src='https://bit.ly/dan-abramov'
                  borderRadius='40px'
                  alt='Dan Abramov'
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