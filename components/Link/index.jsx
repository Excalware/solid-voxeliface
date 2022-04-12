import React from 'react';
import { styled } from '@stitches/react';

const StyledLink = styled('a', {
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

export default function Link({ css, icon, text, color, children, ...props }) {
    return (
        <StyledLink {...props} css={{
            color: color,
            ...css
        }}>
            {icon}
            {children ?? text ?? "Link"}
        </StyledLink>
    );
};