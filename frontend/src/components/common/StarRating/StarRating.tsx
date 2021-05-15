import React from 'react';
import Star from "../Star/Star";

require('../../../assets/css/StarRating.css');

type Props = {
    text: string;
    scale: number;
};
type State = {
    rate: number;
};

class StarRating extends React.Component<Props, State> {

    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = {
            rate: 0
        }
    }

    checkStar = (starNumber: number) => {
        this.setState({rate: starNumber});
    }

    render() {
        const {text, scale} = this.props;
        const {rate} = this.state;

        const stars = []
        for(let i = 1; i <= scale; i+=1)
            stars.push(
                <button type="submit" onClick={() => this.checkStar(i)}>
                    <Star filled={rate >= i}/>
                </button>
            )

        return (
            <div className="StarRating">
                <p>{text}</p>
                <div className="stars">
                    {stars}
                </div>
            </div>
        );
    }
}

export default StarRating;
