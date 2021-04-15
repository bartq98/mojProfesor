import React from 'react';
import { Space } from 'antd';
import { Input } from 'components/common';
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
        <Space direction="horizontal">
            <SearchInput onSearch={() => {}} />
        </Space>
    </Container>
);

export default ComponentsView;
