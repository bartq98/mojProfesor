import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout as ALayout, Menu } from 'antd';
import styled from 'styled-components';
import Logo from 'assets/img/logo.svg';
import { COLOURS } from 'utils/constants';
import { SearchInput } from '../Input';

const { Header: AHeader } = ALayout;

const StyledHeader = styled(AHeader)`
    background-color: ${COLOURS.yellow};
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ant-layout-header,
    .ant-menu {
        background-color: ${COLOURS.yellow};
        border: none;
        height: 100%;
        .ant-menu-item {
            a {
                color: ${COLOURS.white};
                font-size: 1rem;
            }
        }
    }
    .search-input {
        width: 30%;
    }
`;

const Img = styled.img`
    height: 30px;
`;

const Header: React.VFC = () => {
    const [filter, setFilter] = useState('');
    const history = useHistory();

    const onSearch = () =>
        history.push(`/profesors${filter && `?filter=${filter}`}`);

    return (
        <StyledHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Link to="/">
                <Img src={Logo} alt="logo" />
            </Link>
            <SearchInput
                placeholder="Twój profesor"
                onSearch={onSearch}
                onChange={setFilter}
            />
            <Menu collapsedWidth={300} mode="horizontal">
                <Menu.Item key="1">
                    <Link to="/register">Zarejestruj</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/login">Zaloguj</Link>
                </Menu.Item>
            </Menu>
        </StyledHeader>
    );
};

export default Header;
