import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Views from './Views';
import UserContext from "./components/AccountContext";
import { ChakraProvider } from '@chakra-ui/react'


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
