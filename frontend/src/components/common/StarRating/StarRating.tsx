import React from 'react';
import Star from '../Star/Star';

import 'assets/css/StarRating.css';

type Props = {
    text: string;
    scale: number;
    onChange: (scale: number) => void;
};

type State = {
    rate: number;
};

class StarRating extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = {
            rate: 0,
        };
    }

    checkStar = (starNumber: number) => {
        const { onChange } = this.props;
        this.setState({ rate: starNumber }, () => onChange(starNumber));
    };

    displayStars = () => {
        const { scale } = this.props;
        const { rate } = this.state;
        const stars = [];

        for (let i = 1; i <= scale; i += 1)
            stars.push(
                <button
                    key={`submit-${i}`}
                    type="submit"
                    onClick={() => this.checkStar(i)}
                >
                    <Star filled={rate >= i} />
                </button>
            );
        return stars;
    };

    render() {
        const { text } = this.props;

        return (
            <div className="StarRating">
                <p>{text}</p>
                <div className="stars">{this.displayStars()}</div>
            </div>
        );
    }
}

export default StarRating;
