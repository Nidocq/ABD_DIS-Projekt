import React from 'react';
import './App.css';
import ItemView from './ItemView/ItemView';
import Item from './Item/Item';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemView /> 
    </div>
  );
}

export default App;
