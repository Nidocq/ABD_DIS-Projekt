import ListingItems from "../ListingItems/ListingItems";
import "./HomeScreen.css";
import Category from "../Categories/Category";
import { useNavigate } from "react-router";


function HomeScreen() {
  const navigate = useNavigate();
  return (
    <main className="main-container">
      <div className="bodyClass">
        <div className="titleWrapper">
          <h1>ABD</h1>
          <h4>Get everything</h4>
        </div>
        <Category />
        <ListingItems />
      </div>
    </main>
  );
}



export default HomeScreen;