import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'

const Header = () => {
    return (
        <div>
            <Nav
                activeKey="/"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link to="/">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/comments'>Comments</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/ablums">Albums</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/photos">Photos</Link>
                </Nav.Item> 
                <Nav.Item>
                    <Link to="/todos">Todos</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/users">Users</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Header
