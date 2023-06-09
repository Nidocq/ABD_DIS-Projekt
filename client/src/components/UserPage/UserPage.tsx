import { useNavigate } from 'react-router';
import './UserPage.css'
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Heading, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { AccountContext } from "../AccountContext";
import {TextField} from "../Login/TextField";
import * as Yup from "yup";

const UserPage = () => {
  const { user } = useContext<any>(AccountContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <>
    <Formik
      initialValues={{ fullname: "", location: "", bio: "" }}
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
            console.log("data", data);
          });
      }}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Update user profile</Heading>
        <Text as="p" color="red.500">
          {error}
        </Text>

        <TextField
          name="fullname"
          placeholder="Change name"
          label="Full name"
          autoComplete="off"
        />

        <TextField
          name="location"
          label="Location"
          placeholder="Change Location"
          autoComplete="off"
        />

        <TextField
          name="bio"
          placeholder="Change Bio"
          autoComplete="off"
          label="Bio"
        />

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