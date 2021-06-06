import React from 'react';
import 'react-circular-progressbar/dist/styles.css';

import "assets/css/SignedIcon.css"

type Props = {
    svg: string
    text: string
};

const SignedIcon: React.FC<Props> = ({ svg, text }: Props) => (
    <div className="signed-icon">
        <img src={svg} className="icon" alt="search-icon" />
        <p>{text}</p>
    </div>
);

export default SignedIcon;
