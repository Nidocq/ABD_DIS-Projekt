import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import CreateListing from './components/CreateListing/CreateListing';
import UserPage from './components/UserPage/UserPage';
import Listing from './components/Listing/Listing';
import ItemView from './components/ItemView/ItemView';
import HomeScreen from './components/HomeScreen/HomeScreen';
import PrivateRoutes from './components/PrivateRoutes';
function Views(props: any) {
    return (
        <Routes>
            {/* <Route path="*" element={<Login />} />  */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/CreateListing" element={<CreateListing />}></Route>
            <Route path="/Listing" element={<Listing />}></Route>
            <Route path="/UserPage" element={<UserPage />}></Route>

            <Route element={<PrivateRoutes/>}>
                <Route path="/home" element={<HomeScreen />} />
            </Route>

            <Route path="*" element={<CreateListing />}></Route>
        </Routes>
    );
}

export default Views;