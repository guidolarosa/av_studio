import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import styled from 'styled-components';
import PaginationControl from './../components/ColorGrading/PaginationControl';
import ProductItem from './../components/ColorGrading/ProductItem';
import {useParams, useHistory} from 'react-router-dom';
import Modal from './../components/common/Modal'


const ColorGrading = props => {
    const [prismicResponse, setPrismicResponse] = useState([]);
    const [allProducts, setAllProducts] = useState(null);
    const [currentPageProducts, setCurrentPageProducts] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductIndex, setSelectedProductIndex] = useState(null);
    const { page } = useParams();
    let history = useHistory();
    
    const apiEndpoint = 'https://crowsnest.cdn.prismic.io/api/v2';
    const client = Prismic.client(apiEndpoint);
    

    const mergeSlices = response => {
        const allProducts = response.results[0].data.body;
        const separatedArray = [];
        
        let i, j, temparray, chunk = 8;
        for (i = 0, j = allProducts.length; i < j; i += chunk) {
            temparray = allProducts.slice(i, i + chunk);
            separatedArray.push(temparray);
        }
        
        setAllProducts(separatedArray);
        // console.log(separatedArray[0]);
    }
    
    const handleKeyDown = keyCode => {
        if (
            currentPage != allProducts.length &&
            currentPage != 1) {
        };

        if (keyCode == '39') {
            if (currentPage != allProducts.length) {
                setCurrentPage(currentPage + 1);
            }
        } else if (keyCode == '37') {
            if (currentPage != 1) {
                setCurrentPage(currentPage - 1);
            }
        }
    };

    const handleModalClose = () => {
        setSelectedProductIndex(null)
    }

    useEffect(() => {
        if (allProducts) {
            setCurrentPageProducts(allProducts[currentPage - 1]);
        }
    }, [currentPage, allProducts])

    useEffect(() => {
        if (page) {
            setCurrentPage(parseInt(page))
        }
    }, []);
    
    useEffect(() => {
        const getPrismicResponse = async () => {
            const response = await client.query(
                Prismic.Predicates.at('document.type', 'color-grading')
                )
                if (response) {
                    mergeSlices(response);
                } else {
                    console.log('Couldn\'t retrieve data');
                }
            };
            getPrismicResponse();
    }, []);

    useEffect(() => {
        history.push("/color-grading&page=" + currentPage)
    }, [currentPage]);

    useEffect(() => {
        // console.log(selectedProductIndex);
    }, [selectedProductIndex])

    return (
        <StyledColorGrading className="color-grading">
            <section
                onKeyDown={(e) => {handleKeyDown(e.keyCode)}}
                tabIndex="0"
            >
                <section className="title-container">
                    <h1>Color Grading</h1>
                    <section className="filter">
                        <span>Filter by </span>
                    </section>
                </section>
                <StyledProductContainer>
                    {allProducts ? (
                        <>
                            <ul className="product-list">
                                {allProducts[currentPage - 1].map((product, index) => (
                                    <ProductItem
                                        key={index}
                                        category={product.primary.product_title[0].text}
                                        productTitle={product.primary.product_title[0].text} 
                                        thumbnailUrl={product.primary.product_thumbnail.url}
                                        productCategory={product.primary.product_type}
                                        onClick={() => {
                                            setSelectedProductIndex(index);
                                            setIsModalOpen(true);
                                        }}
                                    />
                                ))}
                            </ul>
                            {
                                selectedProductIndex != null && 
                                (<Modal 
                                    productID={selectedProductIndex}
                                    isModalOpen={isModalOpen}
                                    productData={
                                        currentPageProducts[selectedProductIndex].primary
                                        }
                                    closeModal={() => {setIsModalOpen(false)}}>
                                </Modal>)
                            }
                            <PaginationControl
                                currentPage={currentPage}
                                totalPages={allProducts.length}
                                setCurrentPage={setCurrentPage}
                            />
                        </>
                    ) : (
                        <span>No products</span>
                    )}
                </StyledProductContainer>
            </section>
        </StyledColorGrading>
    )
};

export default ColorGrading;

const StyledColorGrading = styled.section`
    .title-container {
        display: flex;
        justify-content: space-between;
        .filter {
            align-self: flex-end;
            font-size: .8rem;
            opacity: .7;
        }
    }
`

const StyledProductContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 72vh;
    margin-top: 20px;
    .product-list {
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
        &:hover li {
            opacity: .8;
        }
        li {
            transition: .1s ease-in-out opacity;
        }
        li:hover {
            opacity: 1;
        }
    }
`;