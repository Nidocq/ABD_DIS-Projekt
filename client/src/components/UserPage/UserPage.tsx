import { useNavigate } from 'react-router';
import './UserPage.css'
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Heading,
  Text,
  VStack,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Img,
  Card,
  CardBody,
  CardFooter,
  HStack,

} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { AccountContext } from "../AccountContext";
import { MultiTextField, TextField } from "../Login/TextField";
import * as Yup from "yup";

const UserPage = () => {
  const { user, setUser } = useContext<any>(AccountContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ fullname: user.fullname, location: user.location, bio: user.bio }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .required("fullname required!")
            .min(2, "fullname too short!")
            .max(50, "fullname too long!"),
          location: Yup.string()
            .required("location required!")
            .min(2, "location too short!")
            .max(200, "location too long!"),
          bio: Yup.string()
            .required("bio required!")
            .min(0, "bio too short!")
            .max(200, "bio too long!"),
        })}
        onSubmit={(values, actions) => {
          const vals = { ...values, username: user.username };
          actions.resetForm();
          fetch("http://localhost:3001/auth/updateuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(vals),
          })
            .catch(err => {
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
              setUser({ ...data });
              navigate("/home");
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
          <Heading>Update user profile</Heading>
          <Card
            width={{ base: "100%", md: "50%" }}
          >
            <CardBody>
              <Text as="p" color="red.500">
                {error}
              </Text>

              <TextField
                type="text"
                name="fullname"
                placeholder="Change name"
                label="Full name"
                autoComplete="off"
              />

              <TextField
                type="text"
                name="location"
                label="Location"
                placeholder="Change Location"
                autoComplete="off"
              />

              <MultiTextField
                type="text"
                name="bio"
                placeholder="Change Bio"
                autoComplete="off"
                label="Bio"
              />

              <CardFooter
                display="flex"
                justifyContent="center"

              >
                <Img
                  src={user.picture}
                  alt="Profile picture"
                />
              </CardFooter>
            </CardBody>
          </Card>
          <ButtonGroup pt="1rem">
            <Button colorScheme="teal" type="submit">
              Make changes
            </Button>
            <Button onClick={() => navigate("/home")} leftIcon={<ArrowBackIcon />}>
              Back
            </Button>
          </ButtonGroup>
        </VStack>
      </Formik>
    </>
  )
}

export default UserPage