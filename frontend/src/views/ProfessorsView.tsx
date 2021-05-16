import React, { Component } from 'react';
import styled from 'styled-components';
import { DetailsTitle } from 'components/ProfesorDetails';

type Props = {};

type State = {};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    > * {
        flex: 1 1 160px;
    }
`;

export default class ProfessorsView extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetch('/professor', {
            // headers: {
            //     'Content-Type': 'application/json',
            // },
        })
            .then(res => res.json())
            .then(res => console.log(res));
    };

    render() {
        return (
            <Container>
                <DetailsTitle
                    mark={3}
                    user={{
                        firstName: 'Jan',
                        lastName: 'Wojtas',
                        university: 'Politechnika Krakowska',
                    }}
                />
                <DetailsTitle
                    mark={3}
                    user={{
                        firstName: 'Jan',
                        lastName: 'Wojtas',
                        university: 'Politechnika Krakowska',
                    }}
                />
                <DetailsTitle
                    mark={3}
                    user={{
                        firstName: 'Jan',
                        lastName: 'Wojtas',
                        university: 'Politechnika Krakowska',
                    }}
                />
                <DetailsTitle
                    mark={3}
                    user={{
                        firstName: 'Jan',
                        lastName: 'Wojtas',
                        university: 'Politechnika Krakowska',
                    }}
                />
                <DetailsTitle
                    mark={3}
                    user={{
                        firstName: 'Jan',
                        lastName: 'Wojtas',
                        university: 'Politechnika Krakowska',
                    }}
                />
            </Container>
        );
    }
}
