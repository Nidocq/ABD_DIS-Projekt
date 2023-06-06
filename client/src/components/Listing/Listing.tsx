import './Listing.css'
import { useContext, useState } from "react";
import { AccountContext } from "../AccountContext";

const Listing = () => {
  const { user } = useContext<any>(AccountContext);
  let stringUser = JSON.stringify(user);
  console.log("user: ", stringUser);

  return (
    <div className='classDesc'>
        <h1>Class Description</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>{user.username}</p>
    </div>
  )
}

export default Listing 