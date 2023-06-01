import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Views from './Views';
import UserContext from "./components/AccountContext";


function App() {
  return (
    <UserContext>
      <div className="App">
        <Views />
        <HomeScreen />
      </div>
    </UserContext>
  );
}

export default App;
