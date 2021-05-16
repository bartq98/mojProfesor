import React from 'react';
import { Layout as ALayout } from 'antd';
import styled from 'styled-components';
import { Header } from '.';

type Props = {
    children: React.ReactChild | React.ReactChild[];
};

const { Content, Footer } = ALayout;

const StyledLayout = styled(ALayout)`
    display: flex;
`;

const Layout: React.FC<Props> = ({ children }: Props) => (
    <StyledLayout>
        <Header />
        <Content className="site-layout" style={{ marginTop: 64 }}>
            {children}
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
        </Footer> */}
    </StyledLayout>
);

export default Layout;
