import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import UserPage from './components/UserPage/UserPage';
import ItemPreview from './components/ItemPreview/ItemPreview';
import HomeScreen from './components/HomeScreen/HomeScreen';
import PrivateRoutes from './components/PrivateRoutes';
import Navbar from './components/Navbar/Navbar';
import CreateListingItem from './components/CreateListingItem/CreateListingItem';
import UpdateListingItem from './components/UpdateListingItem/UpdateListingItem';
function Views(props: any) {
    return (
        <>

            <Navbar />
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                <Route element={<PrivateRoutes />}>
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="/updateuser" element={<UserPage />} />
                    <Route path="/createlistingitem" element={<CreateListingItem />} />
                    <Route path="/item-preview/:itemId" element={<ItemPreview />} />
                    <Route path="/updatelisting/:itemId" element={<UpdateListingItem />} />
                </Route>
            </Routes>
        </>
    );
}

export default Views;