import React from 'react';
import { styled } from '@stitches/react';

const StyledDivider = styled('div', {
    borderRadius: '50%',
    backgroundColor: '$gray8'
});

export default function Divider({ css, width, height, margin }) {
    return (
        <StyledDivider css={{
            width: width ?? "2px",
            height: height ?? "2px",
            margin: margin ?? "0",
            ...css
        }}/>
    );
};