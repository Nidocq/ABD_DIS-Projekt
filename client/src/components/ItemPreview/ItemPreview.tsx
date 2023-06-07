import './ItemPreview.css'
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../AccountContext";
import { useParams } from 'react-router';
import { VStack } from '@chakra-ui/react';

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
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <div className='item-preview-wrapper'>
        <h1>Class Description</h1>
        <p>{itemId}</p>
        <p>{user.username}</p>
      </div>

    </VStack>
  )
}

export default ItemPreview; 