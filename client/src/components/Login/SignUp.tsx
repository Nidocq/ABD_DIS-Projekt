import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Heading, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { AccountContext } from "../AccountContext";
import { TextField, MultiTextField } from "./TextField";
import { createAvatar } from '@dicebear/core';
import { bottts, lorelei, pixelArt } from '@dicebear/collection';

import * as Yup from "yup";

const SignUp = () => {
  const { setUser } = useContext<any>(AccountContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const avatarArr: string[] = useMemo(() => {
    const arr: string[] = [];

    arr.push(createAvatar(pixelArt, {
      size: 128,
      // ... other options
    }).toDataUriSync());

    arr.push(createAvatar(lorelei, {
      size: 128,
      // ... other options
    }).toDataUriSync());

    arr.push(createAvatar(pixelArt, {
      size: 128,
      seed: "John"
      // ... other options
    }).toDataUriSync());

    arr.push(createAvatar(pixelArt, {
      size: 128,
      seed: "Jane"
      // ... other options
    }).toDataUriSync());

    arr.push(createAvatar(bottts, {
      size: 128,
      // ... other options
    }).toDataUriSync());

    return arr;
  }, []);

  const generateRandomAvatar = () => {
    return avatarArr[Math.floor(Math.random() * avatarArr.length)];
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        fullname: "",
        location: "",
        bio: "",
        picture: generateRandomAvatar()
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required!")
          .min(6, "Username too short!")
          .max(28, "Username too long!"),
        password: Yup.string()
          .required("Password required!")
          .min(6, "Password too short!")
          .max(28, "Password too long!"),
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
        const vals = { ...values };
        actions.resetForm();
        fetch("http://localhost:3001/auth/signup", {
          method: "POST",
          credentials: "include",
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
            console.log("signup res", data);
            if (data.status) {
              setError(data.status);
            } else if (data.loggedIn) {
              navigate("/home");
            }
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
        <Heading>Sign Up</Heading>
        <Text as="p" color="red.500">
          {error}
        </Text>
        <TextField
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          label="Username"
        />

        <TextField
          name="password"
          placeholder="Enter password"
          autoComplete="off"
          label="Password"
          type="password"
        />

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

        <MultiTextField
          name="bio"
          placeholder="Change Bio"
          autoComplete="off"
          label="Bio"
        />

        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Create Account
          </Button>
          <Button onClick={() => navigate("/")} leftIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default SignUp;