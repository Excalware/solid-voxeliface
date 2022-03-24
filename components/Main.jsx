import React from 'react';
import { styled } from '@stitches/react';

const StyledMain = styled('main', {
    display: "flex",
    padding: '32px 40px',
    flexGrow: 1,
    overflow: 'hidden auto',
    maxHeight: "calc(100vh - 64px)",
    background: "#1D1D1D",
    alignItems: "left",
    alignContent: "center",
    flexDirection: "column",
    '@media only screen and (max-width: 768px)': {
        padding: '32px 0'
    }
});

export default class Main extends React.Component {
    render() {
        return (
            <StyledMain style={{
                width: this.props.width,
                ...this.props.style
            }}>
                {this.props.children}
            </StyledMain>
        );
    }
};