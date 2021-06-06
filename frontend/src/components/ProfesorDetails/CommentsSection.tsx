import React from 'react';
import styled from 'styled-components';
import { COLOURS } from 'utils/constants';
import OpinionCard from 'components/OpinionCard';

type Props = {
    opinions: IOpinion[];
};

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
    /* overflow-y: scroll; */
`;

const CommentsSection: React.FC<Props> = ({ opinions }) => (
    <Container className="comments-section">
        {opinions.map(({ content, details }) => (
            <OpinionCard marks={JSON.parse(details)}>{content}</OpinionCard>
        ))}
    </Container>
);

export default CommentsSection;
