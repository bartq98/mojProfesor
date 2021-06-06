import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import StarRating from 'components/common/StarRating';
import { Space } from 'components/common';
import { Card, Button, Input, notification } from 'antd';
import styled from 'styled-components';
import * as dal from 'dal';
import 'assets/css/AddOpinionView.css';

const { TextArea } = Input;
const StyledCard = styled(Card)`
    .ant-card-body {
        .custom-space {
            margin-top: 10%;
        }
        min-width: 600px;
    }
`;

const AddOpinionView: React.FC = () => {
    const [step, setStep] = useState(0);
    const [attractiveness, setAttractiveness] = useState(0);
    const [competence, setCompetence] = useState(0);
    const [passing, setPassing] = useState(0);
    const [friendliness, setFriendliness] = useState(0);
    const [opinion, setOpinion] = useState('');

    const history = useHistory();
    const match = useRouteMatch();

    const submitOpinion = () => {
        const { id } = match.params as any;
        if (!id)
            return notification.warn({ message: 'Nie odnaleziono profesora' });

        const marks = [
            { opinion: attractiveness, key: 'ATR' },
            { opinion: competence, key: 'COM' },
            { opinion: passing, key: 'PAS' },
            { opinion: friendliness, key: 'FRI' },
        ];
        const details = JSON.stringify(marks);

        return dal.opinion
            .addOpinion({ details, content: opinion, professorId: id })
            .then(() => {
                notification.success({ message: 'Pomyślnie dodano opinie' });
                history.push(`/professor/${id}`);
            })
            .catch(() => {
                setStep(0);
                setAttractiveness(0);
                setCompetence(0);
                setPassing(0);
                setFriendliness(0);
                setOpinion('');
                notification.warn({
                    message: 'Wystąpił błąd podczas dodawania opinii',
                });
            });
    };

    const displayStep = () => {
        switch (step) {
            case 0:
                return (
                    <>
                        <StarRating
                            onChange={setAttractiveness}
                            scale={5}
                            text="Atrakcyjność zajęć"
                        />
                        <StarRating
                            onChange={setCompetence}
                            scale={5}
                            text="Kompetentność"
                        />
                        <StarRating
                            onChange={setPassing}
                            scale={5}
                            text="Łatwość zaliczenia"
                        />
                        <StarRating
                            onChange={setFriendliness}
                            scale={5}
                            text="Przyjazność"
                        />
                        <Button type="primary" onClick={() => setStep(1)}>
                            Dodaj ocene
                        </Button>
                    </>
                );
            case 1:
                return (
                    <>
                        <TextArea
                            onChange={e => setOpinion(e.target.value)}
                            rows={10}
                            placeholder="Opinia"
                        />
                        <Space justify="space-between">
                            <Button type="primary" onClick={() => setStep(0)}>
                                Zmień ocene
                            </Button>
                            <Button type="primary" onClick={submitOpinion}>
                                Dodaj opinie
                            </Button>
                        </Space>
                    </>
                );
            default:
                return <></>;
        }
    };

    return (
        <div className="add-opinion-view">
            <StyledCard>
                <header>Zgłoś opinię</header>
                {displayStep()}
            </StyledCard>
        </div>
    );
};

export default AddOpinionView;
