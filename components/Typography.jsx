import { styled } from 'solid-stitches';

const StyledTypography = styled('span', {
    color: "#fff",
    margin: 0,
    display: "flex",
    fontSize: "1rem",
    textAlign: "center",
    fontWeight: 500,
    alignItems: "center"
});

export default function Typography(props) {
    return (
        <StyledTypography {...props} css={{
            width: props.width,
            color: props.color,
            margin: props.margin,
            height: props.height,
            fontSize: props.size,
            textAlign: props.textalign,
            fontWeight: props.weight ?? 500,
            fontFamily: props.family,
            lineHeight: props.lineheight ?? 1.43,
            whiteSpace: props.whitespace,
            ...props.css
        }}>
            {props.text}
            {props.children}
        </StyledTypography>
    );
};