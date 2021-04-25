import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactChild[] | React.ReactChild;
    direction?: FlexDirection;
    width?: string;
    justify?: JustifyContent;
    align?: AlignItems;
    className?: string;
    wrap?: Wrap;
};

type StyleProps = {
    direction: FlexDirection;
    width: string;
    justify: JustifyContent;
    align: AlignItems;
    wrap: Wrap;
};

const StyledSpace = styled.div<StyleProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    width: ${props => props.width};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-wrap: ${props => props.wrap};
`;

const Space: React.FC<Props> = ({
    children,
    className = '',
    direction = 'row',
    width = '100%',
    justify = 'initial',
    align = 'initial',
    wrap = 'nowrap',
}: Props) => (
    <StyledSpace
        className={`custom-space ${className}`}
        width={width}
        direction={direction}
        justify={justify}
        align={align}
        wrap={wrap}
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
    wrap: 'nowrap',
};

export default Space;
