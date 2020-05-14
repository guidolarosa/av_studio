import React from 'react';
import styled from 'styled-components';
import { Link, useParams, useHistory } from 'react-router-dom';

const StyledNavbar = styled.div`
    background: #595d67;
    padding: 10px 30px;
    border-radius: 50px;
    display: flex;
    h1 {
        padding: 0;
        margin: 0;
    }
    nav {
        flex-grow: 1;
        ul {
            display: flex;
            justify-content: space-between;
            width: 50%;
            margin-left: 50%;
            li {
                display: inline-block;
                font-size: .8rem;
                line-height: 1.7rem;
            }
        }
    }
`;

const Navbar = props => {
    const { section } = useParams();
    return (
        <StyledNavbar>
            <h1>Crows Nest</h1>
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