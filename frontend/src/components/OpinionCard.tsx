import React from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import { Space } from './common';

type Props = {
    children?: React.ReactChild | React.ReactChild[];
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

const OpinionCard: React.FC<Props> = ({ children }: Props) => (
    <StyledCard
        title={
            <Space justify="space-between" className="opinion-marks-space">
                <p>Atrakcyjność zajęć - 5</p>
                <p>Atrakcyjność zajęć - 5</p>
                <p>Atrakcyjność zajęć - 5</p>
                <p>Atrakcyjność zajęć - 5</p>
                <p>Atrakcyjność zajęć - 5</p>
                <p>Atrakcyjność zajęć - 5</p>
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

OpinionCard.defaultProps = {
    children: <></>,
};

export default OpinionCard;
