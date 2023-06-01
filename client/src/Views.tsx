import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import CreateListing from './components/CreateListing/CreateListing';
import UserPage from './components/UserPage/UserPage';
import Listing from './components/Listing/Listing';
import ItemView from './components/ItemView/ItemView';
import HomeScreen from './components/HomeScreen/HomeScreen';
function Views(props: any) {
    return (
         <Routes>
            {/* <Route path="*" element={<Login />} />  */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/CreateListing" element={<CreateListing />}></Route>
            <Route path="/Listing" element={<Listing />}></Route>
            <Route path="/UserPage" element={<UserPage />}></Route>
        </Routes> 
    );
}

export default Views;