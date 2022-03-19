import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from "react-router-dom";

import UserRoutes from './user_routes';
import DefaultRoutes from './default_routes';
import NotFound from "../pages/NotFound";

const IndexRoutes = () => (
    <Router>
        <Routes>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default IndexRoutes