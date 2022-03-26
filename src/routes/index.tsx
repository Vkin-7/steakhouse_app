import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from "react-router-dom";

import ProtectRoutes from './protect_routes';
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NavBarTop from "../components/NavBarTop";

const IndexRoutes = () => (
    <Router>
        <NavBarTop />
        <Routes>
            <Route element={<ProtectRoutes />}>
                <Route path='/account' />
                <Route path='/products'>
                    <Route path='details:id' />
                </Route>
            </Route>

            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default IndexRoutes