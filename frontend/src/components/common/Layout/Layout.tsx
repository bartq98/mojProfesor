import React from 'react';
import { Layout as ALayout } from 'antd';
import styled from 'styled-components';
import { Header } from '.';

type Props = {
    children: React.ReactChild | React.ReactChild[];
};

const { Content } = ALayout;

const StyledLayout = styled(ALayout)`
    display: flex;
`;

const Layout: React.FC<Props> = ({ children }: Props) => (
    <StyledLayout>
        <Header />
        <Content className="site-layout">{children}</Content>
    </StyledLayout>
);

export default Layout;
