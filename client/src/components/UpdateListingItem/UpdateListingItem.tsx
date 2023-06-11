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
  list,
} from '@chakra-ui/react';
import './UpdateListingItem.css'
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { MultiTextField, TextField } from "../Login/TextField";
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router';
import { DropdownCategories } from '../Login/TextField';
import IItem from '../../interfaces/IItem';
import { AccountContext } from '../AccountContext';

let _item: IItem = {
  lid: 0,
  categories: "",
  description: 'sdlfkjsdlfk',
  img: "",
  location: '',
  price: 0,
  sold: false,
  sellerPicture: '',
  title: '',
  username: '',
  likes: 0,
  isLiked: false
}

const UpdateListingItem = (): JSX.Element => {
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
        console.log("phils items",item)
        setItem({ ...item });

        setItemLoaded(true);
      })
      .catch(error => {
        console.error("Error fetching item:", error);
      });
  }, []);

  const {user} = useContext<any>(AccountContext)
 console.log("Item.IMg", Item.img) 
  return (
    <>
        {itemLoaded ? (
        <Formik
      initialValues={{
        title: Item.title, 
        description: Item.description,
        img: Item.img,
        price: Item.price,
        category: Item.categories,
        location: Item.location,
        username: Item.username,
        lid: Number(itemId)
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("Title must have at least 3 characters")
          .min(3, "Title is too short")
          .max(28, "Title is too long"),
        description: Yup.string()
          // Doens't require min since it can be NULL in the database
          .max(300, "Max characters for description is 300 characters"),
        price: Yup.number()
          .required("Price is required"),
        // img: Yup.string()
        //   .required("Image url is required"),
        category: Yup.string()
          .required("Category is required")
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        console.log("Sending forms with data : ", vals);
        actions.resetForm();
             fetch("http://localhost:3001/auth/updatelistingitem", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({...vals}),
            }).catch(e => {
                console.error(e);
                return;
              })
              .then(res => {
                if (!res || !res.ok || res.status >= 400) {
                  return;
                }
                 console.log(res)
                 return res.json();
              })
              .then(data => {
                if (!data) return;
                console.log("res", data);
                navigate("/item-preview/"+data.lid); 
              });

      }}
    >
        <VStack
          as={Form}
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
                    <TextField
                      type="number"
                      name="price"
                      placeholder="Price"
                      autoComplete="off"
                      label="Price"
                    />
                  </InputGroup>

                  <TextField
                    name="img"
                    label="Paste Image URL here"
                    autoComplete="off"
                  />

                  <MultiTextField
                    name="description"
                    placeholder="Description"
                    autoComplete="off"
                    label="Description"
                  />

                </VStack>


              </HStack>
            </CardBody>
            <CardFooter>
              <InputGroup size='md'>
                <DropdownCategories
                  name="category"
                  autoComplete="off"
                  label="Category"
                />
              </InputGroup>
            </CardFooter>
          </Card>

          <ButtonGroup pt="1rem">
            <Button colorScheme="teal" type="submit">
              Update Listing
            </Button>
            <Button onClick={() => navigate("/home")} leftIcon={<ArrowBackIcon />}>
              Back
            </Button>
          </ButtonGroup>
        </VStack>
    </Formik>
    )
    : null}
    </>
  )
}

export default UpdateListingItem
