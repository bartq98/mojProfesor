import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { COLOURS } from 'utils/constants';

const { Search } = Input;

type Props = {
    placeholder?: string;
    customWidth?: string;
    customHeight?: string;
    customFontSize?: string;
    onSearch: (value: string) => void;
};

type StyledProps = {
    customWidth?: string;
    customHeight?: string;
    customFontSize?: string;
};

const StyledSearch = styled(Search)<StyledProps>`
    input {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        width: ${(props: StyledProps) => props.customWidth || 'initial'};
        height: ${(props: StyledProps) => props.customHeight || 'initial'};
        font-size: ${(props: StyledProps) => props.customFontSize || 'initial'};
    }
    .ant-btn {
        border-bottom-right-radius: 20px !important;
        border-top-right-radius: 20px !important;
        background-color: ${COLOURS.dark};
        border: none;
    }
`;

const SearchInput: React.FC<Props> = ({
    placeholder,
    onSearch,
    customHeight,
    customFontSize,
    customWidth,
}: Props) => (
    <StyledSearch
        className="search-input"
        customWidth={customWidth}
        customFontSize={customFontSize}
        customHeight={customHeight}
        placeholder={placeholder || ''}
        onSearch={onSearch}
        enterButton
    />
);

SearchInput.defaultProps = {
    placeholder: '',
    customFontSize: '',
    customHeight: '',
    customWidth: '',
};

export default SearchInput;
