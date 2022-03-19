import {
    Routes,
    Route
  } from "react-router-dom";

const DefaultRoutes = () => (
    <Routes>
        <Route path='/' />
        <Route path='/create' />
        <Route path='/recover'>
            <Route path=':email' />
        </Route>
    </Routes>
)

export default DefaultRoutes;