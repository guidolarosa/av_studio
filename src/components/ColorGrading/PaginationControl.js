import React from 'react';
import styled from 'styled-components';

const PaginationControl = props => {
    return (
        <StyledPaginationControl className="pagination-controls">
            <span 
                onClick={() => {props.setCurrentPage(props.currentPage - 1)}}
                className={
                    'control ' + (
                        props.currentPage == 1 && 'disabled'
                    )
                }
            >Previous</span>
            <section className="page-selector">
                <ul className="page-list">
                    {[...Array(props.totalPages)].map((e,index) => (
                        <li 
                            className={index + 1 == props.currentPage ? 'selected' : ''}
                            onClick={() => {props.setCurrentPage(index + 1)}}
                            key={index}>
                            {index + 1}
                        </li>))
                    }
                </ul>
            </section>
            <span 
                onClick={() => {props.setCurrentPage(props.currentPage + 1)}}
                className={
                    'control ' + (
                        props.currentPage == props.totalPages && 'disabled'
                    ) 
                }
            >Next
            </span>
        </StyledPaginationControl>
    )
}

export default PaginationControl;

const StyledPaginationControl = styled.section`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .control {
        cursor: pointer;
    }
    .control.disabled {
        opacity: .3;
        pointer-events: none;
    }
    .page-selector {
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
`;