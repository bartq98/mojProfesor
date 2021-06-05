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
    onSearch: (value?: string) => void;
    onChange?: (e: string) => void;
};

type StyledProps = {
    width?: string;
    height?: string;
    fontsize?: string;
};

const StyledSearch = styled(Search)<StyledProps>`
    input {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        width: ${(props: StyledProps) => props.width || 'initial'};
        height: ${(props: StyledProps) => props.height || '34.8px'};
        font-size: ${(props: StyledProps) => props.fontsize || 'initial'};
    }
    .ant-btn {
        border-bottom-right-radius: 20px !important;
        border-top-right-radius: 20px !important;
        background-color: ${COLOURS.dark};
        border: none;
    }
    .ant-input-group-addon {
        background: none;
    }
`;

const SearchInput: React.FC<Props> = ({
    placeholder,
    onSearch,
    onChange,
    customHeight,
    customFontSize,
    customWidth,
}: Props) => (
    <StyledSearch
        className="search-input"
        width={customWidth}
        fontsize={customFontSize}
        height={customHeight}
        placeholder={placeholder || ''}
        onSearch={() => onSearch()}
        onChange={e => onChange && onChange(e.target.value)}
        enterButton
    />
);

SearchInput.defaultProps = {
    placeholder: '',
    customFontSize: '',
    customHeight: '',
    customWidth: '',
    onChange: () => {},
};

export default SearchInput;
