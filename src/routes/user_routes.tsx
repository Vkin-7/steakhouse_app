import {
    Routes,
    Route
  } from "react-router-dom";

const UserRoutes = () => (
    <Routes>
        <Route path='/' />
        <Route path='/account' />
        <Route path='/products'>
            <Route path='details:id' />
        </Route>
    </Routes>
)

export default UserRoutes;