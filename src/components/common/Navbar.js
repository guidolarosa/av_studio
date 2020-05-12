import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.div`
    background: #595d67;
    padding: 15px;
    border-radius: 50px;
    ul {
        display: flex;
        justify-content: space-between;
        width: 40%;
        margin-left: 60%;
        li {
            display: inline-block;
        }
    }
`;

const Navbar = props => {
    return (
        <StyledNavbar>
            <nav>
                <ul>
                    {props.routes.map(route => (
                        route.navbarEnabled && (
                            <li>
                                <Link 
                                    to={route.url}
                                    className={route.navbarClass}>
                                    {route.name}
                                </Link>
                            </li>
                        )
                    ))}
                </ul>
            </nav>
        </StyledNavbar>
    )
};

export default Navbar;