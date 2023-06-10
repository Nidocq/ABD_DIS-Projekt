import './ItemPreview.css'
import React, { useContext, useEffect, useState } from "react";
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
import _ from 'lodash';
import { AddIcon } from '@chakra-ui/icons';
import IUser from '../../interfaces/IUser';
import IItem from '../../interfaces/IItem';

const _itemOwner: IUser = {
  username: '',
  passhash: '',
  fullname: '',
  location: '',
  bio: '',
  picture: ''
};

let _item: IItem = {
  lid: 0,
  categories: [""],
  description: '',
  img: [""],
  location: '',
  price: 0,
  sold: false,
  title: '',
  username: '',
  likes: 0,
  isLiked: false
}

const ItemPreview = () => {
  const { user } = useContext<any>(AccountContext);
  const { itemId } = useParams();
  const [item, setItem] = useState<IItem>(_item);
  const [itemOwner, setItemOwner] = useState<IUser>(_itemOwner);
  const [itemLoaded, setItemLoaded] = useState(false);


  // Fetch the item that was clicked on and save it to itemProps via useState
  useEffect(() => {
    fetch(`http://localhost:3001/auth/item-preview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId: itemId }),
    }).then(res => res.json())
      .then(data => {
        if (!data) return;
        const item = data[0];
        setItem({ ...item });
        setItemLoaded(true);
      })
      .catch(error => {
        console.error("Error fetching item:", error);
      });
  }, []);

  // Fetch the user who is selling the current item
  useEffect(() => {
    if (!itemLoaded || _.isEqual(item, _item)) return; // Don't proceed if item not loaded or item not set yet
    fetch(`http://localhost:3001/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: item.username }),
    })
      .then(res => res.json())
      .then(data => {
        if (!data) return;
        setItemOwner({ ...data });
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, [itemLoaded]);

  return (
    item && itemOwner &&
    <HStack
      w={{ base: "90%", md: "1000px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <Card >
        <CardBody>
          <Image
            src={item.img[0]}
            borderRadius='lg'
            maxW={"500px"}
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
            <HStack justify={"space-between"}>
              <Heading size='md'>{item.title}</Heading>
                <VStack>
              <HStack>
          <Box>
            <Img
              boxSize='50px'
              src={itemOwner.picture}
              borderRadius='40px'
              alt={itemOwner.username}
            />
          </Box>
          <Box>
            {user.username === itemOwner.username ? "You" : itemOwner.username}
          </Box>
              </HStack>
          <Text>User since: </Text>
          </VStack>
            </HStack>
            <Text>
              {item.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {item.price},-
            </Text>

            <Text
              textColor={'gray'}
            >
              Date listed: 
            </Text>

          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
         <Button colorScheme='blue'>Contact seller</Button> 
         <Button colorScheme='green' > <AddIcon/> </Button> 
          </ButtonGroup>
        </CardFooter>
      </Card>
      <VStack
        
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
      </VStack>
      <VStack spacing='24px'>
      </VStack>
    </HStack>
  )
}

export default ItemPreview; 