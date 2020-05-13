import React from 'react';
import styled from 'styled-components';
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa';

const PaginationControl = ({
    style,
    setCurrentPage,
    currentPage,
    totalPages
}) => {
    return (
        <StyledPaginationControl className="pagination-controls">
            <span 
                onClick={() => {setCurrentPage(currentPage - 1)}}
                className={
                    'control ' + (
                        currentPage == 1 && 'disabled'
                    )
                }
            >
                <FaCaretLeft />
            </span>
            {style == 'full' ? (
            <section className="list-selector-container">
                <ul className="page-list">
                    {[...Array(totalPages)].map((e,index) => (
                        <li 
                            className={index + 1 == currentPage ? 'selected' : ''}
                            onClick={() => {setCurrentPage(index + 1)}}
                            key={index}>
                            {index + 1}
                        </li>))
                    }
                </ul>
            </section>
            ) : (
            <section className="input-selector-container">
                <section className="input-selector">
                    <span className="current-page">
                        {currentPage}
                    </span> / <span className="total-pages">{totalPages}</span>
                </section>
            </section>
            )}
            <span 
                onClick={() => {setCurrentPage(currentPage + 1)}}
                className={
                    'control ' + (
                        currentPage == totalPages && 'disabled'
                    ) 
                }
            > <FaCaretRight />
            </span>
        </StyledPaginationControl>
    )
}

export default PaginationControl;

const StyledPaginationControl = styled.section`
    margin-top: 10px;
    text-align: center;
    padding-bottom: 10px;
    .control {
        cursor: pointer;
        position: relative;
        top: .5rem;
        transition: .2s ease-in opacity;
        opacity: .7;
        &:hover {
            opacity: 1;
        }
        svg {
            font-size: 1.5rem;
        }
    }
    .control.disabled {
        opacity: .2;
        pointer-events: none;
    }
    .list-selector-container {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        padding: 0px 15%;
        font-size: .8rem;
        .page-list {
            display: flex;
            justify-content: space-between;
            li {
                opacity: .5;
                display: inline-block;
                cursor: pointer;
                transition: .2s ease-in-out opacity;
            }
            li.selected {
                opacity: 1;
            }
        }
    }
    .input-selector-container {
        text-align: center;
        width: 50%;
        display: inline-block;
        margin: auto;
        .total-pages {
            opacity: .7;
            font-size: .8rem;
        }
        span {
            line-height: 1.5rem;
        }
    }
`;