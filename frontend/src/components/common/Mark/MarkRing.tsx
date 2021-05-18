import React from 'react';
import { COLOURS } from 'utils/constants';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
    mark: number;
};

const MarkRing: React.FC<Props> = ({ mark }: Props) => (
    <CircularProgressbar
        value={mark}
        maxValue={5}
        minValue={1}
        styles={{
            path: { stroke: COLOURS.orange },
            text: { fill: COLOURS.orange, fontSize: '30px' },
        }}
        text={`${mark}`}
    />
);

export default MarkRing;
