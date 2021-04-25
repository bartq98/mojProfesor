import React from 'react';
import styled from 'styled-components';
import { DetailsSection, CommentsSection } from 'components/ProfesorDetails';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`;

const ProfesorDetailsView: React.FC = () => (
    <Container>
        <DetailsSection />
        <CommentsSection />
    </Container>
);

export default ProfesorDetailsView;
