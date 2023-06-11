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
import { MultiTextField, TextField, DropdownCategories } from "../Login/TextField";
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';

const CreateListingItem = () => {
  const [pictureURL, setPictureURL] = useState<string>("https://cdn-icons-png.flaticon.com/512/2651/2651001.png");
  const [value, setValue] = useState('1.53')
  const [error, setError] = useState(null);
  const [menuOption, setMenuOption] = useState<string>("");

  const processPicture = (event: ChangeEvent<HTMLInputElement>) => {
    setPictureURL(event.target.value);
  };
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        img: pictureURL,
        price: value,
        categories: [""]
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
        img: Yup.string()
          .required("Image url is required")
          .url("Image url must be a valid url"),
        categories: Yup.array()
          .required("Category is required")
      })}
      onSubmit={(values, actions) => {
        debugger;
        console.log("hegegheheq")
        const vals = { ...values };
        console.log(vals)
        actions.resetForm();
      }}
    /*         fetch("http://localhost:3001/auth/createlisting", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(vals),
            })
          }} */
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
                    <NumberInput
                      onChange={(valueString) => setValue((valueString))}
                      value={value}
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
                    name="img"
                    value={pictureURL}
                    onChange={processPicture}
                    label="Paste Image URL here"
                  />

                  <MultiTextField
                    name="description"
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
                <DropdownCategories
                  name="category"
                  autoComplete="off"
                  label="Category"
                  setMenuOption={(arg: any) => setMenuOption(arg)}
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