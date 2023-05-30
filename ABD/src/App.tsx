import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen/HomeScreen';
import Views from './Views';

function App() {
  return (
    <div className="App">
      <Views>
      <HomeScreen />
    </div>
  );
}

export default App;
