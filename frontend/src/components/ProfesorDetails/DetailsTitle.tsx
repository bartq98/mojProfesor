import {Button, notification} from 'antd';
import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {authSlice} from 'store/slices';
import styled from 'styled-components';
import {Mark, Text} from '../common';

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

const DetailsTitle: React.FC<Props> = ({ user, mark }: Props) => {
    const { user: appUser } = useSelector(authSlice.authSelector);
    const history = useHistory();
    const match = useRouteMatch();

    const addMark = () => {
        const { id } = match.params as any;
        if (!id) {
            notification.warn({ message: 'Nie odnaleziono profesora' });
            return;
        }

        history.push(`/professor/${id}/add-opinion`);
    };
    return (
        <Contaier className="details-title">
            <Section align="left">
                <Title
                    level={1}
                >{`${user.academicTitle} ${user.firstName} ${user.lastName}`}</Title>

                {appUser.email && (
                    <Button onClick={addMark} type="primary">
                        Dodaj ocenę
                    </Button>
                )}
            </Section>
            <Section align="center">
                <MarkNumber mark={mark} />
            </Section>
        </Contaier>
    );
};

export default DetailsTitle;
