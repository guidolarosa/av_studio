import React from 'react';
import styled from 'styled-components';

const Loader = props => {
    return (
        <StyledLoader>
            <span>Loading</span>
        </StyledLoader>
    )
}

const StyledLoader = styled.div`
`;

export default Loader;