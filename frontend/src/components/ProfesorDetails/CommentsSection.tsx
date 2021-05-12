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
    /* overflow-y: scroll; */
`;

const CommentsSection: React.FC = () => (
    <Container className="comments-section">
        {[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend turpis, ac hendrerit urna. Nulla eros lorem, placerat eget semper in, sodales nec mauris. Etiam finibus, arcu eu imperdiet feugiat, lacus velit euismod odio, quis sodales velit magna non tortor. Vivamus ac porta odio. Curabitur viverra, sapien nec sagittis lobortis, nisl diam ultrices tortor, vel facilisis ex nisl eget justo. Sed et lacus blandit, efficitur purus vitae, egestas arcu. Sed vitae lacus nec tortor laoreet sollicitudin. Vestibulum vestibulum enim eget odio pretium, ac porta nisi tempus. Nunc et pharetra sapien, eget mattis tortor. Aliquam dignissim mi quis diam condimentum volutpat. Ut tincidunt, ex eu varius tincidunt, lectus lacus tempor felis, ut aliquam tellus dolor sit amet ligula.',
        ].map(c => (
            <OpinionCard>{c}</OpinionCard>
        ))}
    </Container>
);

export default CommentsSection;
