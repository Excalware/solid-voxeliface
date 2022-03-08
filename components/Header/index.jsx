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
    backgroundColor: "#121212",

    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between"
});

const StyledBrand = styled('div', {
    display: "flex",
    alignItems: "center"
});

export default class Header extends React.Component {
    render() {
        return (
            <StyledHeader data-tauri-drag-region>
                <StyledBrand>
                    {this.props.brand}
                </StyledBrand>
                {this.props.children}
            </StyledHeader>
        );
    }
};