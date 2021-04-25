import React from 'react';
import styled from 'styled-components';
import { COLOURS, MOCK } from 'utils/constants';
import { Text, Mark, Space } from 'components/common';
import DetailsTitle from './DetailsTitle';

const { Title } = Text;
const { MarkRingCard } = Mark;

const Container = styled.div`
    flex-basis: 50%;
    background-color: ${COLOURS.dark};
    display: flex;
    flex-direction: column;
    padding: 2% 3% 2% 3%;
    justify-content: space-between;

    .content {
        flex: 1;
    }
`;

const DetailsSection: React.FC = () => (
    <Container className="details-section">
        <DetailsTitle
            mark={4}
            user={{
                firstName: 'Jan',
                lastName: 'Kowalski',
                university: 'Politechnika Krakowska',
            }}
        />
        <Space justify="center" className="content" direction="column">
            <Title level={3}>Średnia ocen z poszczegolnych kategorii</Title>
            <Space justify="space-between" direction="row">
                {MOCK.mark.map(({ mark, title }) => (
                    <MarkRingCard mark={mark} title={title} />
                ))}
            </Space>
        </Space>
    </Container>
);

export default DetailsSection;