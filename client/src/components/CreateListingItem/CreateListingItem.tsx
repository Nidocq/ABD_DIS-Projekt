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
import { ChangeEvent, useState } from 'react';
import { MultiTextField, TextField } from "../Login/TextField";
import { Formik } from 'formik';
import * as Yup from "yup";
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';
import { DropdownCategories } from '../Categories/Category';

const CreateListingItem = () => {
  const [pictureURL, setPictureURL] = useState<string>("https://cdn-icons-png.flaticon.com/512/2651/2651001.png");
  const [value, setValue] = useState('1.53')
  const [error, setError] = useState(null);
  const processPicture = (event: ChangeEvent<HTMLInputElement>) => {
    setPictureURL(event.target.value);
  };
  const navigate = useNavigate();

  const format = (val: string) => `$` + val
  const parse = (val: string) => val.replace(/^\$/, '')
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
                      onChange={(valueString) => setValue(parse(valueString))}
                      value={format(value)}
                      min={0}
                      name='price'
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
              onClick={() => alert("Saved data")}
              type="submit">
              <b>Create Listing</b>
            </Button>
            <Button onClick={() => navigate("/")} leftIcon={<ArrowBackIcon />}>
              Back
            </Button>
          </ButtonGroup>
        </VStack>
      </div>
    </Formik>
  )
}

export default CreateListingItem