import React from 'react';
import { styled } from '@stitches/react';

const StyledDivider = styled('div', {
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.08)'
});

export default class Divider extends React.Component {
    render() {
        return (
            <StyledDivider css={{
                width: this.props.width ?? "2px",
                height: this.props.height ?? "2px",
                margin: this.props.margin ?? "0",
                ...this.props.css
            }}/>
        );
    }
};