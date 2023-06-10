import './App.css';
import Views from './Views';
import UserContext from "./components/AccountContext";


// TODO: Check if theme is better than original
function App() {
  return (
    <UserContext>
        <div className="App">
          <Views />
        </div>
    </UserContext>
  );
}

export default App;
