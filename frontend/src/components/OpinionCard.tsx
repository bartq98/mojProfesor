/* eslint-disable react/require-default-props */
import React from 'react';
import {Card} from 'antd';
import styled from 'styled-components';
import {MARKS} from 'utils/constants';
import {Space} from './common';

type Props = {
    children?: React.ReactChild | React.ReactChild[];
    marks: IOpinionDetails;
};

const StyledCard = styled(Card)`
    margin: 4% 3% 0 3%;
    width: 90%;
    background: rgba(255, 255, 255, 0.5);
    padding: 24px 24px 0 24px;
    .opinion-marks-space {
        overflow: auto;
    }
    .custom-space {
        p {
            padding: 1%;
        }
    }
    .ant-card-head {
        padding: 0;
    }
`;

const OpinionCard: React.FC<Props> = ({ children, marks }: Props) => (
    <StyledCard
        title={
            <Space justify="space-between" className="opinion-marks-space">
                {marks.map(({ opinion, key }) => (
                    <p>
                        {MARKS[key]}- {opinion}
                    </p>
                ))}
            </Space>
        }
    >
        <Space direction="column">
            <div className="opinion-card-content">{children}</div>
            <div className="opinion-card-footer">
                {/* <Button type="text">More...</Button> */}
            </div>
        </Space>
    </StyledCard>
);

export default OpinionCard;
