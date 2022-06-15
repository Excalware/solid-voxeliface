import { styled } from 'solid-stitches';

const StyledDivider = styled('div', {
    borderRadius: '50%',
    backgroundColor: '#ffffff14'
});

export default function Divider({ css, width, height, margin }) {
    return (
        <StyledDivider css={{
            width: width ?? 2,
            height: height ?? 2,
            margin: margin ?? 0,
            ...css
        }}/>
    );
};