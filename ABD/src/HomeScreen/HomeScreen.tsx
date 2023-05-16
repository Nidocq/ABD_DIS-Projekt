import React from "react";
import Navbar from "../Navbar/Navbar";
import ItemView from "../ItemView/ItemView";
import CategorySuggest from "../CategorySuggestion/CategorySuggest";
import "./HomeScreen.css";


function HomeScreen() {
    return ( 
        <>
      <Navbar />
      <div className="titleWrapper">
        <h1>ABD</h1>
        <h4>Get everything</h4>
      </div>
      <CategorySuggest />
      <ItemView /> 
          </>
     );
}



export default HomeScreen;