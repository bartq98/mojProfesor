import React, { useState } from 'react';
import styled from 'styled-components';
import { DetailsSection, CommentsSection } from 'components/ProfesorDetails';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`;

const ProfesorDetailsView = () => {
    const [data, setData] = useState(null);
    return (
        <Container>
            <DetailsSection />
            <CommentsSection />
        </Container>
    );
};

export default ProfesorDetailsView;
