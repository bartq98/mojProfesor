import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactChild[] | React.ReactChild;
    direction?: FlexDirection;
    width?: string;
    justify?: JustifyContent;
    align?: AlignItems;
    className?: string;
};

type StyleProps = {
    direction: FlexDirection;
    width: string;
    justify: JustifyContent;
    align: AlignItems;
};

const StyledSpace = styled.div<StyleProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    width: ${props => props.width};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
`;

const Space: React.FC<Props> = ({
    children,
    className = '',
    direction = 'row',
    width = '100%',
    justify = 'initial',
    align = 'initial',
}: Props) => (
    <StyledSpace
        className={`custom-space ${className}`}
        width={width}
        direction={direction}
        justify={justify}
        align={align}
    >
        {children}
    </StyledSpace>
);

Space.defaultProps = {
    direction: 'row',
    width: '100%',
    align: 'initial',
    justify: 'initial',
    className: '',
};

export default Space;
