import React from 'react';
import styled from 'styled-components';
import palette from './../../utils/palette';

const ProductItem = props => {
    return (
        <StyledProductItem 
            title={props.productTitle}
            onClick={props.onClick}>
            <section className="title-container">
                <h2>
                    <span 
                        className={`type-tag ${
                            props.productCategory
                        }`}>•</span>
                    {props.productTitle}
                </h2>
            </section>
            <div 
                className="product-thumbnail"
                style={{
                    backgroundImage:`url(${props.thumbnailUrl})`
                }}>
            </div>
        </StyledProductItem>
    )
};

export default ProductItem;

const StyledProductItem = styled.li`
    display: inline-block;
    width: 23%;
    cursor: pointer;
    margin-bottom: 20px;
    .title-container {
        display: flex;
        h2 {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            opacity: .8;
            margin-bottom: 5px;
            font-size: 1rem;
            display: inline-block;
            background: transparent;
            position: relative;
            width: 100%;
            padding-right: 20px;
            .type-tag {
                position: absolute;
                font-size: 1rem;
                right: 0;
                top: 2px;
                transform: scale(3);
                margin-right: 5px;
                &.largometraje {
                    color: ${palette('blue')};
                }
                &.cortometraje {
                    color: ${palette('red')};
                }
                &.videoclip {
                    color: ${palette('green')};
                }
                &.comercial {
                    color: ${palette('yellow')};
                }
                &.serie {
                    color: ${palette('purple')};
                }
            }
        }
    }
    .product-thumbnail {
        width: 100%;
        height: 25vh;
        background-size: cover;
        border-radius: 3px;
    }
`;