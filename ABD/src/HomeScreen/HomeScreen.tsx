import React from "react";
import Navbar from "../Navbar/Navbar";
import ItemView from "../ItemView/ItemView";
import CategorySuggest from "../CategorySuggestion/CategorySuggest";
import "./HomeScreen.css";


function HomeScreen() {
  return (
    <main className="main-container">
      <Navbar />
      <div className="bodyClass">
        <div className="titleWrapper">
          <h1>ABD</h1>
          <h4>Get everything</h4>
        </div>
        <CategorySuggest />
        <ItemView />
      </div>
    </main>
  );
}



export default HomeScreen;