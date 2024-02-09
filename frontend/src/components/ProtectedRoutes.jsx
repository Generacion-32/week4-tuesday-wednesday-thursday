import { Container } from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const ProtectedRoutes = () => {

    const getToken = () => localStorage.getItem("token");

    if (getToken()) {
        return (
            <>
                <NavBar />
                <Container className="mt-5">
                    <Outlet />
                </Container>
            </>
        )
    } else {
        return <Navigate to='/login' />
    }
};   

export default ProtectedRoutes;