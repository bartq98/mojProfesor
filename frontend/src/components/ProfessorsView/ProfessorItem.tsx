import React from 'react';
import styled from 'styled-components';
import { Text } from 'components/common';
import { useHistory } from 'react-router-dom';

const { Title } = Text;

const Section = styled.div<any>`
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: ${props => props.align};
    border-bottom: 1px solid #fff;
    height: 20%;
    &:hover {
        background-color: #bdd4e7;
        background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
    }
`;

type Props = {
    firstName: string;
    lastName: string;
    university: string;
    id: string;
};

const ProfessorItem: React.FC<Props> = ({
    firstName,
    lastName,
    university,
    id,
}: Props) => {
    const history = useHistory();
    return (
        <Section
            key={id}
            align="left"
            onClick={() => history.push(`/profesor/${id}`)}
        >
            <Title level={1}>{`${firstName} ${lastName}`}</Title>
            <Title level={3}>{`${university}`}</Title>
        </Section>
    );
};

export default ProfessorItem;
