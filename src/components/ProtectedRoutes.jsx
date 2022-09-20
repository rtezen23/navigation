import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const token = localStorage.getItem('password');

    if(token === '123'){
        return <Outlet />
    } else { 
        return <Navigate to='/buzon' />
    }                     
};                        

export default ProtectedRoutes;