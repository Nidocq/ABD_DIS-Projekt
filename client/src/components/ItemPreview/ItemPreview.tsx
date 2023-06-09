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
import { ItemProps } from '../Item/Item';
import _ from 'lodash';

interface userProps {
  username: string,
  id: number,
  passhash: string,
  fullname: string,
  location: string,
  bio: string,
  userSince: Date,
  picture: string
}

interface itemProps {
  categories: string[],
  description: string,
  id: number,
  img: string[],
  location: string,
  price: number,
  title: string,
  sold: boolean,
  timeListed: Date,
  username: string | userProps
};

const _itemOwner: userProps = {
  username: '',
  id: 0,
  passhash: '',
  fullname: '',
  location: '',
  bio: '',
  userSince: new Date(),
  picture: ''
};

let _item: itemProps = {
  categories: [""],
  description: '',
  id: 0,
  img: [""],
  location: '',
  price: 0,
  sold: false,
  timeListed: new Date(),
  title: '',
  username: ''
}

let _user: userProps = {
  username: '',
  id: 0,
  passhash: '',
  fullname: '',
  location: '',
  bio: '',
  userSince: new Date(),
  picture: ''
}

const ItemPreview = () => {
  const { user } = useContext<any>(AccountContext);
  const { itemId } = useParams();
  const [item, setItem] = useState<itemProps>(_item);
  const [itemOwner, setItemOwner] = useState<userProps>(_itemOwner);

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
        setItem(item);
      })
      .catch(error => {
        console.error("Error fetching item:", error);
      });
  }, []);

  // Fetch the user who is selling the current item
  useEffect(() => {
    if (_.isEqual(item, _item)) return; // Don't proceed if the item is not set yet
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
        console.log("some data of the user:", data)
        setItemOwner(data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, [item]);

  return (
    <HStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <Text> date here:</Text>
      <Card maxW='500px'>
        <CardBody>
          <Image
            src={item.img[0]}
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
            <Heading size='md'>{item.title}</Heading>
            <Text>
              {item.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {item.price},-
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
              src={itemOwner.picture}
              borderRadius='40px'
              alt={itemOwner.username}
            />
          </Box>
          <Box >
            {itemOwner.username}
          </Box>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default ItemPreview; 