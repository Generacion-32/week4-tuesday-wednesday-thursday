import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTodos } from '../store/slices/todos.slice';
import { setUser } from '../store/slices/user.slice';

const NavBar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const logout = () => {
        navigate("/login");
        localStorage.setItem("token", "");
        dispatch(setUser({}));
        dispatch(setTodos([]));
    }
    
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>To Do's</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link onClick={logout}>Log out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;