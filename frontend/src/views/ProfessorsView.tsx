import React from 'react';
import { useLocationQuery } from 'hooks';
import styled from 'styled-components';
import { ProfessorItem } from 'components/ProfessorsView';

type Props = {};

type State = {};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: flex-start;
    background-color: #b3cdd1;
    background-image: linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%);
    padding: 4%;
    > * {
        flex: 1 1 160px;
    }
`;

const ProfessorsView: React.FC = () => {
    const { params } = useLocationQuery({ keys: ['filter'] });

    return (
        <Container>
            <ProfessorItem
                firstName="Jan"
                lastName="Kowalski"
                university="Politechnika Krakowska"
                id="fsdfsdfsd"
            />
            <ProfessorItem
                firstName="Jan"
                lastName="Kowalski"
                university="Politechnika Krakowska"
                id="fsdfsdfsd"
            />
            <ProfessorItem
                firstName="Jan"
                lastName="Kowalski"
                university="Politechnika Krakowska"
                id="fsdfsdfsd"
            />
            <ProfessorItem
                firstName="Jan"
                lastName="Kowalski"
                university="Politechnika Krakowska"
                id="fsdfsdfsd"
            />
            <ProfessorItem
                firstName="Jan"
                lastName="Kowalski"
                university="Politechnika Krakowska"
                id="fsdfsdfsd"
            />
            <ProfessorItem
                firstName="Jan"
                lastName="Kowalski"
                university="Politechnika Krakowska"
                id="fsdfsdfsd"
            />
            <ProfessorItem
                firstName="Jan"
                lastName="Kowalski"
                university="Politechnika Krakowska"
                id="fsdfsdfsd"
            />
        </Container>
    );
};

export default ProfessorsView;
