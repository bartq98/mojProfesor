/* eslint-disable */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {COLOURS, MARKS} from 'utils/constants';
import {Mark, Space, Text} from 'components/common';
import {Spin} from 'antd';
import DetailsTitle from './DetailsTitle';

type Props = {
    professor?: IProfessor;
    opinions: IOpinion[];
};

const { Title } = Text;
const { MarkRingCard } = Mark;

const Container = styled.div`
    background-color: ${COLOURS.dark};
    display: flex;
    flex-direction: column;
    padding: 2% 3% 2% 3%;
    justify-content: space-between;
    max-width: 100vw;

    .content {
        flex: 1;
    }

    .custom-space {
        margin-top: 10%;
    }
`;

const DetailsSection: React.FC<Props> = ({ professor, opinions }) => {
    const [globalMark, setMark] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const averageMark =
            opinions.reduce((acc, cur) => {
                const marks: IOpinionDetails = JSON.parse(cur.details);
                const sum = marks.reduce(
                    (accc, curr) => (accc += curr.opinion),
                    0
                );
                return acc + sum;
            }, 0) /
            (opinions.length * 4);

        setMark(averageMark);
        setLoading(false);
    }, [professor?.id, opinions.length]);

    const displayCategoryMarks = () => {
        const marks: IOpinionDetails[] = opinions.map(v =>
            JSON.parse(v.details)
        );

        let ATR = 0;
        let COM = 0;
        let PAS = 0;
        let FRI = 0;

        for (const m of marks) {
            Object.entries(m).map(([_, { key, opinion }]) => {
                if (key === 'ATR') {
                    ATR += opinion;
                }
                if (key === 'COM') {
                    COM += opinion;
                }
                if (key === 'PAS') {
                    PAS += opinion;
                }
                if (key === 'FRI') {
                    FRI += opinion;
                }
            });
        }

        return Object.entries(MARKS).map(([key, title]) => {
            if (key === 'ATR') {
                return (
                    <MarkRingCard
                        mark={ATR ? (ATR / opinions.length).toFixed(2) : 0}
                        title={title}
                    />
                );
            }
            if (key === 'COM') {
                return (
                    <MarkRingCard
                        mark={COM ? (COM / opinions.length).toFixed(2) : 0}
                        title={title}
                    />
                );
            }
            if (key === 'PAS') {
                return (
                    <MarkRingCard
                        mark={PAS ? (PAS / opinions.length).toFixed(2) : 0}
                        title={title}
                    />
                );
            }
            return (
                <MarkRingCard
                    mark={FRI ? (FRI / opinions.length).toFixed(2) : 0}
                    title={title}
                />
            );
        });
    };

    return (
        <Container className="details-section">
            {loading ? (
                <Spin spinning={loading} />
            ) : (
                <>
                    <DetailsTitle
                        mark={parseFloat(globalMark.toFixed(2)) || 0}
                        user={{
                            firstName: professor?.firstName || '',
                            lastName: professor?.lastName || '',
                            academicTitle: professor?.academicTitle || '',
                        }}
                    />
                    <Space
                        justify="flex-start"
                        className="content"
                        direction="column"
                    >
                        <Title level={3}>
                            Średnia ocen z poszczegolnych kategorii
                        </Title>
                        <Space
                            wrap="wrap"
                            justify="space-around"
                            direction="row"
                        >
                            {displayCategoryMarks()}
                        </Space>
                    </Space>
                </>
            )}
        </Container>
    );
};

export default DetailsSection;
