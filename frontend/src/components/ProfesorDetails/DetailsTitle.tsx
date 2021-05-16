import React from 'react';
import styled from 'styled-components';
import { Text, Mark } from '../common';

type Props = {
    user: any;
    mark: number;
};

const { MarkNumber } = Mark;
const { Title } = Text;

const Contaier = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-wrap: wrap;
`;

const Section = styled.div<any>`
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: ${props => props.align};
`;

const DetailsTitle: React.FC<Props> = ({ user, mark }: Props) => (
    <Contaier className="details-title">
        <Section align="left">
            <Title level={1}>{`${user.firstName} ${user.lastName}`}</Title>
            <Title level={3}>{user.university}</Title>
            <Title level={3}>Wydział Mechaniczny</Title>
        </Section>
        <Section align="center">
            <MarkNumber mark={mark} />
        </Section>
    </Contaier>
);

export default DetailsTitle;
