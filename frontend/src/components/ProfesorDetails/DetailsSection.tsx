import React from 'react';
import styled from 'styled-components';
import { COLOURS } from 'utils/constants';
import DetailsTitle from './DetailsTitle';

const Container = styled.div`
    flex-basis: 50%;
    background-color: ${COLOURS.dark};
    display: flex;
    flex-direction: column;
`;

const DetailsSection = () => (
    <Container className="details-section">
        <DetailsTitle
            mark={4}
            user={{
                firstName: 'Jan',
                lastName: 'Kowalski',
                university: 'Politechnika Krakowska',
            }}
        />
    </Container>
);

export default DetailsSection;
