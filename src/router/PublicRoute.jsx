import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {

    const {user} = useSelector(state => state.auth)
    

    return user?.token
        ? <Navigate to="/" />
        : <Outlet />
}