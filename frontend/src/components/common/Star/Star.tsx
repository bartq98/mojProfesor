import React from 'react';
import starRegular from 'assets/img/star-regular.svg';
import starSolid from 'assets/img/star-solid.svg';

import 'assets/css/Star.css';

type Props = {
    filled: boolean;
};

const Star: React.FC<Props> = ({ filled }: Props) => (
    <img src={filled ? starSolid : starRegular} className="icon" alt="star" />
);

export default Star;
