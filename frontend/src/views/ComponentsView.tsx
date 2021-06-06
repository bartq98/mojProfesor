import React from 'react';
import {Space} from 'antd';
import {Input, Mark} from 'components/common';
import styled from 'styled-components';

const { SearchInput } = Input;

const Container = styled.div`
    display: flex;
    width: 100vw;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ComponentsView: React.FC = () => (
    <Container>
        <Space direction="vertical">
            <SearchInput onSearch={() => {}} />
            <Space direction="horizontal">
                <Mark.MarkRing mark={3.5} />
                <Mark.MarkRing mark={5} />
                <Mark.MarkRing mark={4} />
                <Mark.MarkRing mark={2} />
                <Mark.MarkRing mark={4.3} />
            </Space>
        </Space>
    </Container>
);

export default ComponentsView;
