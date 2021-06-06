import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
    level: 1 | 2 | 3 | 4 | 5;
    children: React.ReactChild | React.ReactChild[];
};

const baseLevel = css`
    color: white !important;
`;

const Level1 = styled.h1`
    ${baseLevel}
    font-size: 60px;
    @media screen and (max-width: 550px) {
        font-size: 40px;
    }
`;
const Level2 = styled.h2`
    ${baseLevel}
    font-size: 24px;
`;
const Level3 = styled.h3`
    ${baseLevel}
    font-size: 18px;
`;

const Title: React.FC<Props> = ({ level, children }: Props) => {
    const getByLevel = () => {
        switch (level) {
            case 1:
                return <Level1>{children}</Level1>;
            case 2:
                return <Level2>{children}</Level2>;
            case 3:
                return <Level3>{children}</Level3>;
            default:
                return <></>;
        }
    };
    return getByLevel();
};

export default Title;
