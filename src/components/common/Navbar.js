import React from 'react';
import styled from 'styled-components';
import { Link, useParams, useHistory } from 'react-router-dom';

const StyledNavbar = styled.div`
    background: #595d67;
    padding: 15px 30px;
    border-radius: 50px;
    ul {
        display: flex;
        justify-content: space-between;
        width: 40%;
        margin-left: 60%;
        li {
            display: inline-block;
            font-size: .8rem;
        }
    }
`;

const Navbar = props => {
    const { section } = useParams();
    return (
        <StyledNavbar>
            <nav>
                <ul>
                    {props.routes.map(route => (
                        <li className={''}>
                            <Link 
                                to={route.url}
                                className={route.url.substr(1)}>
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </StyledNavbar>
    )
};

export default Navbar;