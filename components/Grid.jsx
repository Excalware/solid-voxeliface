
import { styled } from 'solid-stitches';

const StyledGrid = styled('div', {
    display: "flex"
});

export default function Grid(props) {
    return (
        <StyledGrid onClick={props.onClick} className={props.className} css={{
            gap: props.spacing,
            width: props.width,
            margin: props.margin,
            height: props.height,
            padding: props.padding,
            flexFlow: props.flow,
            flexWrap: {
                none: "nowrap",
                wrap: "wrap",
                reverse: "wrap-reverse"
            }[props.wrap],
            background: props.background,
            alignItems: props.alignItems,
            borderRadius: props.borderRadius,
            alignContent: props.alignContent,
            flexDirection: {
                horizontal: "row",
                horizontalReverse: "row-reverse",
                vertical: "column",
                verticalReverse: "column-reverse"
            }[props.direction],
            justifyContent: props.justifyContent,
            gridTemplateColumns: props.templateColumns,
            ...props.css
        }}>
            {props.children}
        </StyledGrid>
    );
};