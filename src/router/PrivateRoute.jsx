import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


export const PrivateRoute = () => {

    const {user} = useSelector(state => state.auth)
    

    return user?.token
        ? <Outlet />
        : <Navigate to="/login" />
}