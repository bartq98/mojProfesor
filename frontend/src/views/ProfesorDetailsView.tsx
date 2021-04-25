import React from 'react';
import styled from 'styled-components';
import { DetailsSection, CommentsSection } from 'components/ProfesorDetails';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    flex-wrap: wrap;
    > * {
        flex: 1 1 160px;
    }
`;

const ProfesorDetailsView: React.FC = () => (
    <Container>
        <DetailsSection />
        <CommentsSection />
    </Container>
);

export default ProfesorDetailsView;
