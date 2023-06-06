import './ItemPreview.css'
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../AccountContext";
import { useParams } from 'react-router';

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
    <div className='classDesc'>
      <h1>Class Description</h1>
      <p>{itemId}</p>
      <p>{user.username}</p>
    </div>
  )
}

export default ItemPreview; 