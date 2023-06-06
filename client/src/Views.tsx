import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import CreateListing from './components/CreateListing/CreateListing';
import UserPage from './components/UserPage/UserPage';
import ItemPreview from './components/ItemPreview/ItemPreview';
import HomeScreen from './components/HomeScreen/HomeScreen';
import PrivateRoutes from './components/PrivateRoutes';
import Navbar from './components/Navbar/Navbar';
function Views(props: any) {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/itempreview" element={<ItemPreview />} />

                <Route element={<PrivateRoutes />}>
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="/createlisting" element={<CreateListing />} />
                    <Route path="/updateuser" element={<UserPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default Views;