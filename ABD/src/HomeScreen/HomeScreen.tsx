import React from "react";
import Navbar from "../Navbar/Navbar";
import ItemView from "../ItemView/ItemView";
import "./HomeScreen.css";
import Category from "../Categories/Category";


function HomeScreen() {
  return (
    <main className="main-container">
      <Navbar />
      <div className="bodyClass">
        <div className="titleWrapper">
          <h1>ABD</h1>
          <h4>Get everything</h4>
        </div>
        <Category />
        <ItemView />
      </div>
    </main>
  );
}



export default HomeScreen;