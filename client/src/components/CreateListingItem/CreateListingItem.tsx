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
import './CreateListingItem.css'
import { ChangeEvent, useContext, useState } from 'react';
import { MultiTextField, TextField, DropdownCategories } from "../Login/TextField";
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';
import { AccountContext } from '../AccountContext';

const CreateListingItem = () => {
  // const [pictureURL, setPictureURL] = useState<string>("https://cdn-icons-png.flaticon.com/512/2651/2651001.png");
  const [value, setValue] = useState<number>();
  const [error, setError] = useState(null);
  const [menuOption, setMenuOption] = useState<string>();
  const [imgArr, setImgArr] = useState<string[]>([]);

  const { user } = useContext<any>(AccountContext);


// newState Arr some gemmer whatever TextField. BY DEFAULT denne state array det initial

  const processPicture = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const house = event.target.value;
    console.log("Setting imgArr to : ", house);
    setImgArr([house]); // Set the image URL as a single-element array
  };

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        img: "",
        price: value,
        category: "",
        location: user.location,
        username: user.username
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
             fetch("http://localhost:3001/auth/createlistingitem", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: vals.title,
                description: vals.description,
                img: vals.img,
                price: vals.price,
                category: vals.category,
                location: vals.location,
                username: vals.username
              }),
            }).catch(e => {
                console.error(e);
                return;
              })
              .then(res => {
                if (!res || !res.ok || res.status >= 400) {
                  return;
                }
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
          <Heading>Create Listing</Heading>
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
              Create Listing
            </Button>
            <Button onClick={() => navigate("/home")} leftIcon={<ArrowBackIcon />}>
              Back
            </Button>
          </ButtonGroup>
        </VStack>
    </Formik>
  )
}

export default CreateListingItem