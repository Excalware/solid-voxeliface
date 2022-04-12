import React from 'react';
import { styled } from '@stitches/react';

const StyledTable = styled('table', {
    width: "100%",
    textAlign: "left",
    tableLayout: "fixed",
    borderSpacing: 0,
    "& *": {
        padding: 0
    },
    "& th": {
        color: "#bbbbbb",
        fontWeight: 500,
        borderBottom: "1px solid #ffffff14",
        backgroundVolor: "#222222"
    },
    "& td": {
        fontWeight: 500,
        borderBottom: "1px solid #ffffff14",
        backgroundColor: "#1D1D1D"
    },
    "& tr:last-child td": {
        borderBottom: "none"
    },
    "& th:last-child, & td:last-child": {
        borderRight: "none"
    },
    "& th, & td": {
        padding: "12px 16px 12px 24px",
        fontSize: ".875rem",
        borderRight: "1px solid #ffffff14"
    }
});

export default function Table(props) {
    return (
        <StyledTable>
            {props.children}
        </StyledTable>
    );
};