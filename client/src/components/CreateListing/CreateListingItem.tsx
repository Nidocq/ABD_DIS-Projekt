import { Button } from '@chakra-ui/react'
import './CreateListingItem.css'

const CreateListingItem = () => {
  return (
    <>
      <div className="ListingWrapper">
        <h1>Create Listing</h1>
        <img className="listingImg" src="."/>
        <h2>Name</h2>
        <input />
        <h2>Description</h2>
        <input />

        <h2>Collection/Category</h2>
        <input /> {/* This should be prechosen like a drop down */}


        <h2>Properties</h2>
        <input />
        {/* how damaged is the item
            Which brand is it from?
             */}

        <h2>Location</h2>
        <p>Chose a location </p>
        <input />
        <p>Item can be sent to buyer</p>
        <input type="radio"/>
        <p>Should be picked up</p>
        <input type="radio"/>

        <br/>
        <Button 
          className="btnSaveListing"
          onClick={() => alert("Saved data")}
          type="submit">
          <b>Create Listing</b>
        </Button>
      </div>
    </>
  )
}

export default CreateListingItem