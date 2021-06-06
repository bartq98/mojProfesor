import React, {useEffect, useState} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import styled from 'styled-components';
import {CommentsSection, DetailsSection} from 'components/ProfesorDetails';
import * as dal from 'dal';
import {notification, Spin} from 'antd';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    flex-wrap: wrap;
    > * {
        flex: 1 1 160px;
    }
`;

const ProfesorDetailsView: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [professor, setProfessor] = useState<IProfessor>();
    const [opinions, setOpinions] = useState<ISortable<IOpinion[]> | null>(
        null
    );
    const match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        const fetchProfessor = async () => {
            const { id } = match.params as any;

            if (!id) {
                notification.warn({ message: 'Nie znaleziono profesora' });
                history.push('/professors');
            }

            const { data } = await dal.professor.getProfessorById(id);
            setProfessor(data);
        };
        setLoading(true);
        fetchProfessor();
        setLoading(false);
    }, [match.path]);

    useEffect(() => {
        const fetchOpinions = async () => {
            if (professor?.id) {
                const { data } = await dal.opinion.getProfessorOpinions(
                    professor.id
                );
                setOpinions(data);
            }
        };
        setLoading(true);
        fetchOpinions();
        setLoading(false);
    }, [professor?.id]);

    return (
        <Container>
            {loading ? (
                <Spin spinning={loading} />
            ) : (
                <>
                    <DetailsSection
                        professor={professor}
                        opinions={opinions?.content || []}
                    />
                    <CommentsSection opinions={opinions?.content || []} />
                </>
            )}
        </Container>
    );
};
export default ProfesorDetailsView;
