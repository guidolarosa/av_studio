import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import palette from './../../utils/palette';

const StyledModal = styled.section`
        &.hidden {
            visibility: hidden;
        }
        .modal-body {
            background: white;
            width: 70vw;
            margin: 15vh 15vw;
            position: absolute;
            top: 0;
            z-index: 2;
            padding-bottom: 10px;
            .video-container {
                background: black;
                width: 100%;
                height: 300px;
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                color: black;
                padding: 10px 20px;
                background: white;
                h1 {
                    font-size: 1.4rem;
                    color: inherit;
                    text-transform: capitalize;
                    .year {
                        font-weight: normal;
                        font-size: .9rem;
                        margin-left: 5px;
                        opacity: .7;
                        color: inherit;
                    }
                }
                .category-tag {
                    color: inherit;
                    padding: 5px 10px;
                    border-radius: 25px;
                    font-size: .8rem;
                    color: rgba(0,0,0,.8);
                    border: 1px solid transparent;
                    &.largometraje {
                        color: ${palette('blue')};
                        border-color: ${palette('blue')};
                    }
                    &.cortometraje {
                        color: ${palette('red')};
                        border-color ${palette('red')};
                    }
                    &.videoclip {
                        color: ${palette('green')};
                        border-color: ${palette('green')};
                    }
                    &.comercial {
                        color: ${palette('yellow')};
                        border-color: ${palette('yellow')};
                    }
                    &.serie {
                        color: ${palette('purple')};
                        border-color: ${palette('purple')};
                    }
                }
            }
        }
        .modal-underlay {
            background: black;
            opacity: .8;
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 1;
        }
`;

const Modal = ({
    closeModal,
    isModalOpen,
    productData
}) => {
    const modalNode = document.getElementById('modal-root');
    const vimeoID = productData.product_vimeo_id[0].text;
    return (
        ReactDOM.createPortal(
            (<StyledModal
                className={`modal ${!isModalOpen ? 'hidden' : ''}`}>
                <section 
                    className="modal-underlay"
                    onClick={closeModal}>
                </section>
                <section className="modal-body">
                    <section className="modal-header">
                        <h1>
                            {productData.product_title[0].text}
                            {productData.product_year[0].text && (
                                <span className="year">
                                    {productData.product_year[0].text}
                                </span>
                            )}
                        </h1>
                        <span className={`category-tag ${productData.product_type}`}>
                            {productData.product_type}
                        </span>
                    </section>
                    <section className="video-container">

                    </section>
                </section>
            </StyledModal>
            ), modalNode
        )
    )
}

export default Modal;