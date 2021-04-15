import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

type Props = {};

const StyledSearch = styled(Search)`
    input {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    button {
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
    }
`;

const SearchInput: React.FC<Props> = () => {
    const onSearch = () => {};

    return (
        <StyledSearch
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
        />
    );
};

export default SearchInput;
