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
  CardFooter,
} from '@chakra-ui/react';
import './CreateListingItem.css'
import { ChangeEvent, useState } from 'react';
import IItem from '../../interfaces/IItem';
import { TextField } from "../Login/TextField";
import { Formik } from 'formik';
import * as Yup from "yup";


const CreateListingItem = () => {
  const [pictureURL, setPictureURL] = useState<string>("");
  const processPicture = (event : ChangeEvent<HTMLInputElement>) => setPictureURL(event.target.value);

  return (
    <Formik
      initialValues={{
        title: "",
        desc: "",
        imageURL: ""
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("Title must have at least 3 characters")
          .min(3, "Title is too short")
          .max(28, "Title is too long"),
        desc: Yup.string()
          .required("Max characters for description is 300 characters")
          // Doens't require min since it can be NULL in the database
          .max(300, "Max characters for description is 300 characters")
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        actions.resetForm();
        fetch("http://localhost:3001/auth/login", {
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
          <Heading>Create Listing</Heading>
          <Card>
            <CardBody>
              <HStack>
                <VStack>
                  <TextField
                    name="title"
                    placeholder="Title"
                    autoComplete="off"
                    label="Title"
                  />
                
                  <InputGroup size='md'>
                    <Input
                      placeholder='Price'
                      htmlSize={8}
                      width='auto'
                    />
                    <InputRightElement
                      pointerEvents='none'
                      color='gray.300'
                      fontSize='1.2em'
                      children='kr'
                    />

                  </InputGroup>
                  <Input placeholder='Categories (Seperated with "," [commas])' />
                  <TextField 
                    name="imageURL"
                    placeholder='https://cdn-icons-png.flaticon.com/512/2651/2651001.png'
                    onChange={processPicture}
                    label="Paste Image URL here"
                  />

                </VStack>
                <Image
                  src={pictureURL}
                  w={{md: "350px"}}
                  borderRadius='lg'
                  maxHeight={"350px"}
                />
              </HStack>
            </CardBody>
            <CardFooter>
            <TextField
                    name="desc"
                    placeholder="Description"
                    autoComplete="off"
                    label="Description"
                  />
            </CardFooter>
          </Card>

          <Button
            className="btnSaveListing"
            onClick={() => alert("Saved data")}
            type="submit">
            <b>Create Listing</b>
          </Button>
        </VStack>
      </div>
    </Formik>
  )
}

export default CreateListingItem