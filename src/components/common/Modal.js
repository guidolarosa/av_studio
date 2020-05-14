import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import palette from './../../utils/palette';
import Vimeo from '@u-wave/react-vimeo';

const Modal = ({
    closeModal,
    isModalOpen,
    productData
}) => {
    const modalNode = document.getElementById('modal-root');

    const vimeoID = productData.product_vimeo_id[0].text;
    const clientID = "446f0df0b78758d32e95173c65aabd464b3fcb27";
    const clientSecret = "bUCzjdt778EGy6NXtxc8vtQcyPNM/IVcVsgyCurUAEUGcwZu9Plh7K0Hhib8xOPQ3H4u8tnYzg9topw72WC2fBhFwgJKI89tLffylMLLYFsMlxHQnBRj5giIq5aNi2am"
    const accessToken = "e2cc6111dc3849fb5a5b75148d30676e";

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
                        <Vimeo 
                            video={vimeoID}
                            paused={!isModalOpen}
                            autopause
                            />
                    </section>
                </section>
            </StyledModal>
            ), modalNode
        )
    )
}
const StyledModal = styled.section`
    &.hidden {
        visibility: hidden;
        .modal-underlay {
            opacity: 0;
            transition: .2s ease-in-out all;
        }
        .modal-body {
            top: 100px;
            opacity: 0;
            transform: scale(.9);
        }
    }
    .modal-underlay {
        background: black;
        opacity: .6;
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        z-index: 1;
    }
    .modal-body {
        opacity: 1;
        background: white;
        width: 70vw;
        margin: 5vh 15vw;
        position: absolute;
        top: 0;
        z-index: 2;
        transition: .3s ease-out all;
        transform: scale(1);
        box-shadow: 0 0 10px black;
        .video-container {
            background: black;
            width: 100%;
            padding: 0 calc(50% - 35vw);
            iframe {
                width: 70vw;
                height: 40vw
            }
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
`;

export default Modal;