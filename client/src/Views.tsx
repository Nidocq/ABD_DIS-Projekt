import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import CreateListing from './components/CreateListing/CreateListing';
import UserPage from './components/UserPage/UserPage';
import Listing from './components/Listing/Listing';
import ItemView from './components/ItemView/ItemView';
import HomeScreen from './components/HomeScreen/HomeScreen';
import PrivateRoutes from './components/PrivateRoutes';
import Navbar from './components/Navbar/Navbar';
function Views(props: any) {
    return (
            <>
            <Navbar />

            <SignUp />
            </>
/*         <Routes>
             <Route path="*" element={<Login />} />  
                         <Route path="/" element={<Login />} /> 
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/CreateListing" element={<CreateListing />} />
            <Route path="/Listing" element={<Listing />} />
            <Route path="/UserPage" element={<UserPage />} />
            <Route path="/ItemView" element={<ItemView />} />
            {/*             <Route element={<PrivateRoutes />}>
            </Route> 

            <Route path="*" element={<CreateListing />}></Route>
        </Routes> */
    );
}

export default Views;