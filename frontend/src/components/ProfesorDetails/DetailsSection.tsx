import React from 'react';
import styled from 'styled-components';
import { COLOURS, MOCK } from 'utils/constants';
import { Space } from 'antd';
import { Text, Mark } from 'components/common';
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
    .ant-space {
        justify-content: space-between;
    }
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
        <div>
            <Title level={3}>Średnia ocen z poszczegolnych kategorii</Title>
            <Space size="large" direction="horizontal">
                {MOCK.mark.map(({ mark, title }) => (
                    <MarkRingCard mark={mark} title={title} />
                ))}
            </Space>
        </div>
    </Container>
);

export default DetailsSection;
