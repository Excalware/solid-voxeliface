import React from 'react';
import { styled } from '@stitches/react';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink, {
    gap: 8,
    color: "#7a98d1",
    cursor: "pointer",
    display: "flex",
    fontSize: "1rem",
    transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    fontFamily: "Gotham, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
    fontWeight: 500,
    lineHeight: 1.43,
    alignItems: "center",
    textDecoration: "none",

    "&:hover": {
        color: "#fff"
    }
});

export default class TauriLink extends React.Component {
    render() {
        return (
            <StyledLink {...this.props} css={{
                color: this.props.color,
                ...this.props.css
            }}>
                {this.props.icon}
                {this.props.children ?? this.props.text ?? "Link"}
            </StyledLink>
        );
    }
};