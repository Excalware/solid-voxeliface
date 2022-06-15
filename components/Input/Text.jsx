import { styled } from 'solid-stitches';

const StyledInput = styled('div', {
    position: "relative"
});

const StyledInputTag = styled('input', {
    color: "$secondaryColor",
    width: "100%",
    border: "1px solid $tagBorder",
    outline: "none",
    padding: "8px 16px",
    minWidth: 196,
    fontSize: "0.9rem",
    background: "none",
    transition: "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    fontWeight: 500,
    fontFamily: "Gotham, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
    borderRadius: 8,

    "&:read-only": {
        cursor: "default"
    },
    "&:not(:read-only):focus": {
        background: "rgba(255, 255, 255, 0.01)",
        borderColor: "#797979"
    },
    "&:disabled": {
        cursor: "not-allowed",
        opacity: "50%"
    }
});

const StyledButtons = styled('div', {
    top: 0,
    right: 0,
    height: "100%",
    display: 'flex',
    padding: ".25rem",
    position: "absolute",

    '& a': {
        height: 'auto'
    }
});

export default function TextInput({ id, width, value, onBlur, onChange, children, disabled, placeholder }) {
    return (
        <StyledInput style={{
            width: width
        }}>
            <StyledInputTag id={id} value={value} onBlur={onBlur} readOnly={readOnly} onChange={onChange} disabled={disabled} placeholder={placeholder}/>
            <StyledButtons>
                {children}
            </StyledButtons>
        </StyledInput>
    );
};