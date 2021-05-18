import React from 'react';
import styled from 'styled-components';

type Props = {
    mark: number;
};

const StyledMark = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    align-items: baseline;
    .mark {
        font-size: 6.5vw;
        @media screen and (max-width: 550px) {
        font-size: 46px;
    }
    }
    .max {
        font-size: 3vw;
    }
`;

const MarkNuber: React.FC<Props> = ({ mark }: Props) => (
    <StyledMark className="mark-number-container">
        <div className="mark">{mark} </div> <div className="max">/ 5</div>
    </StyledMark>
);

export default MarkNuber;
