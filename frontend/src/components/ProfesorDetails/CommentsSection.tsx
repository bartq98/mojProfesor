import React from 'react';
import styled from 'styled-components';
import { COLOURS } from 'utils/constants';
import OpinionCard from 'components/OpinionCard';

const Container = styled.div`
    background-color: ${COLOURS.blue};
    flex-direction: column;
    display: flex;
    padding: 2% 0;
    align-items: 'center';
    max-width: 100vw;
    min-width: 360px;
    align-items: center;
    max-height: 100vh;
    overflow-y: scroll;
`;

const CommentsSection: React.FC = () => (
    <Container className="comments-section">
        {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map(c => (
            <OpinionCard>{c} </OpinionCard>
        ))}
    </Container>
);

export default CommentsSection;
