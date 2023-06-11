import {
    HStack, VStack,
    Box,
    Input,
    InputRightAddon,
    InputRightElement,
    InputLeftElement,
    InputGroup,
    Image,
    Img,
    Text,
    Heading,
    Stack,
    Button,
    Card,
    CardBody,
    Textarea,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    CardFooter,
    ButtonGroup,
    FormControl,
    FormErrorMessage,
    FormLabel,
  } from '@chakra-ui/react';
  import './UpdateListingItem.css'
  import { ChangeEvent, useEffect, useState } from 'react';
  import { MultiTextField, TextField } from "../Login/TextField";
  import { Formik } from 'formik';
  import * as Yup from "yup";
  import { ArrowBackIcon } from '@chakra-ui/icons';
  import { useNavigate, useParams} from 'react-router';
  import { DropdownCategories } from '../Login/TextField';
import IItem from '../../interfaces/IItem';
  
let _item: IItem = {
    lid: 0,
    categories: [""],
    description: 'sdlfkjsdlfk',
    img: [""],
    location: '',
    price: 0,
    sold: false,
    sellerPicture: '',
    title: '',
    username: '',
    likes: 0,
    isLiked: false
  }
 
  const UpdateListingItem = () : JSX.Element => {
    const [pictureURL, setPictureURL] = useState<string>("");
    const [value, setValue] = useState('')
    const [error, setError] = useState(null);
    const [Item, setItem] = useState<IItem>(_item);
    const [itemLoaded, setItemLoaded] = useState(false);
    const { itemId } = useParams();
    const processPicture = (event: ChangeEvent<HTMLInputElement>) => {
      setPictureURL(event.target.value);
    };
    const navigate = useNavigate();

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
  
    const format = (val: string) => `$` + val
    const parse = (val: string) => val.replace(/^\$/, '')
    return (
      <>
      {itemLoaded && 
      <Formik
        initialValues={{
          title: Item.title ,
          desc: Item.description,
          imageURL: Item.img,
          price: Item.price
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required("Title must have at least 3 characters")
            .min(3, "Title is too short")
            .max(28, "Title is too long"),
          description: Yup.string()
            .required("Max characters for description is 300 characters")
            // Doens't require min since it can be NULL in the database
            .max(300, "Max characters for description is 300 characters"),
  
          imageurl: Yup.string()
            .required("Image url is required")
            .url("Image url must be a valid url")
  
        })}
        onSubmit={(values, actions) => {
          const vals = { ...values };
          actions.resetForm();
          fetch("http://localhost:3001/auth/updatelisting", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(vals),
          })
        
        }}
      >
        
        <div className="ListingWrapper">
          <VStack
            m="auto"
            justify="center"
            h="100vh"
            spacing="1rem"
          >
            <Heading>Update Listing</Heading>
            <Card>
              <CardBody>
                <HStack>
                  <VStack>
                    <Text as="p" color="red.500">
                      {error}
                    </Text>
                    <TextField
                      name="title"
                      placeholder="Title"
                      autoComplete="off"
                      label="Title"
                    />
  
                    <InputGroup size='md'>
                      <NumberInput
                        name='price'
                        onChange={(valueString) => setValue(parse(valueString))}
                        value={format(value)}
                        min={0}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
  
                    </InputGroup>
  
                    <TextField
                      name="imageURL"
                      value={pictureURL}
                      onChange={processPicture}
                      label="Paste Image URL here"
                    />
  
  
                <MultiTextField
                  name="desc"
                  placeholder="Description"
                  autoComplete="off"
                  label="Description"
                />
                  </VStack>
                  <Image
                    src={pictureURL}
                    w={{ md: "350px" }}
                    borderRadius='lg'
                    maxHeight={"350px"}
                  />
                </HStack>
              </CardBody>
              <CardFooter>
                    <InputGroup size='md'>
                      <DropdownCategories />
                    </InputGroup>
              </CardFooter>
            </Card>
  
            <ButtonGroup pt="1rem">
  
              <Button
                className="btnSaveListing"
                onClick={() => {}}
                type="submit">
                <b>Update Listing</b>
              </Button>
              <Button 
                onClick={() => window.confirm("Your work will be lost if you go back")
                  ? navigate("/item-preview/" + itemId) 
                  : (() => {})} 
                leftIcon={<ArrowBackIcon />}>
                Back
              </Button>
            </ButtonGroup>
          </VStack>
        </div>
      </Formik>
  }
      </>
    )
  }
  
  export default UpdateListingItem