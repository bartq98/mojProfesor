import React from 'react';
import styled from 'styled-components';
import MarkRing from './MarkRing';

type Props = {
    mark: number | string;
    title: string;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    h2 {
        color: white;
        text-align: center;
        font-size: 16px;
    }
`;

const MarkRingCard: React.FC<Props> = ({ mark, title }: Props) => (
    <Container className="mark-ring-card">
        <h2>{title}</h2>
        <MarkRing mark={mark} />
    </Container>
);

export default MarkRingCard;
