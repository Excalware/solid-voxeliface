import React from 'react';
import { styled } from '@stitches/react';

const StyledHeader = styled('header', {
    top: 0,
    width: "100%",
    zIndex: 1100,
    padding: "0 24px",
    position: "sticky",
    minHeight: 64,
    userSelect: 'none',
    background: "#121212",

    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between"
});

const StyledBrand = styled('a', {
    gap: "8px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
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