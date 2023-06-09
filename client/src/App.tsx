import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Views from './Views';
import UserContext from "./components/AccountContext";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme";


// TODO: Check if theme is better than original
function App() {
  return (
    <UserContext>
      <ChakraProvider>
        <div className="App">
          <Views />
        </div>
      </ChakraProvider>
    </UserContext>
  );
}

export default App;
