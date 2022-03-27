import React from 'react';
import { styled } from '@stitches/react';

const StyledHeader = styled('header', {
    top: 0,
    width: "100%",
    height: 64,
    zIndex: 1100,
    padding: "0 24px",
    position: "sticky",
    userSelect: 'none',
    background: "#121212",

    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between"
});

const StyledBrand = styled('a', {
    display: "flex",
    alignItems: "center"
});

export default class Header extends React.Component {
    render() {
        return (
            <StyledHeader css={this.props.css} data-tauri-drag-region>
                <StyledBrand href="/">
                    {this.props.brand}
                </StyledBrand>
                {this.props.children}
            </StyledHeader>
        );
    }
};