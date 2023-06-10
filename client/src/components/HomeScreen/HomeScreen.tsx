import ListingItems from "../ListingItems/ListingItems";
import "./HomeScreen.css";
import Category from "../Categories/Category";
import { ColorMode, useColorMode } from '@chakra-ui/react';
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
import { colorTheme } from "../toggleColorMode";


function HomeScreen() {
  const { colorMode, toggleColorMode } = useColorMode(); 
  var darklightmode = colorMode == colorTheme.dark ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)"
  return (
    <main className="main-container">
      <div className="bodyClass">
        <div className="titleWrapper">
          <Heading
            // linear gradient
            // background={`linear-gradient(90deg, ${darklightmode} 59%, rgba(255,228,181,1) 78%)`} 
            // raidal gradient
            background={`radial-gradient(circle, ${darklightmode} 5%, rgba(255,228,181,1) 93%)`}
            backgroundClip={"text"}
            color={"transparent"} 
            fontSize={"82px"}
            >
              ABD
          </Heading>

          <Heading
            opacity={"0.6"}
            fontSize={"16px"}
            >
              Get everything you search for!
          </Heading>
        </div>
        <Category />
        <ListingItems />
      </div>
    </main>
  );
}



export default HomeScreen;