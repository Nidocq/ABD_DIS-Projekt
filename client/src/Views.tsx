import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import CreateListing from './CreateListing/CreateListing';
import UserPage from './UserPage/UserPage';
import Listing from './Listing/Listing';
import ItemView from './ItemView/ItemView';
import HomeScreen from './HomeScreen/HomeScreen';
function Views(props: any) {
    return (
         <Routes>
            {/* <Route path="*" element={<Login />} />  */}
            <Route path="/" element={<Login />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/auth/signup" element={<SignUp />}/>
            <Route path="/CreateListing" element={<CreateListing />}></Route>
            <Route path="/Listing" element={<Listing />}></Route>
            <Route path="/UserPage" element={<UserPage />}></Route>
        </Routes> 
    );
}

export default Views;