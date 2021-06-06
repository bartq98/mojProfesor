import React, { useEffect, useState } from 'react';
import { useLocationQuery } from 'hooks';
import styled from 'styled-components';
import { ProfessorItem } from 'components/ProfessorsView';
import * as dal from 'dal';
import { useLocation, useRouteMatch } from 'react-router-dom';

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
    const [professors, setProfessors] = useState<IProfessor[]>([]);
    const location = useLocation();

    useEffect(() => {
        console.log(location);

        const fetchProfessors = async () => {
            const { search } = location;
            const { data } = await dal.professor.getAllProfessors(0, 20);
            const response: IGetAllProfessorsResponse = data;
            if (!search) {
                return setProfessors(response.content);
            }
            const filter = search.replace('?filter=', '');
            // eslint-disable-next-line no-shadow
            const professors = response.content.filter(
                ({ firstName, lastName }) =>
                    `${lastName.toLocaleLowerCase()} ${firstName.toLocaleLowerCase()}`.includes(
                        filter.toLocaleLowerCase()
                    )
            );

            return setProfessors(professors);
        };

        fetchProfessors();
    }, [location]);

    return (
        <Container>
            {professors.map(({ firstName, lastName, academicTitle, id }) => (
                <ProfessorItem
                    firstName={firstName}
                    lastName={lastName}
                    title={academicTitle}
                    id={id}
                />
            ))}
        </Container>
    );
};

export default ProfessorsView;
