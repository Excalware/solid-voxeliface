import React from 'react';
import { styled } from '@stitches/react';

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

export default class TextInput extends React.Component {
    render() {
        return (
            <StyledInput style={{
                width: this.props.width
            }}>
                <StyledInputTag id={this.props.id} value={this.props.value} onBlur={this.props.onBlur} readOnly={this.props.readOnly} onChange={this.props.onChange} disabled={this.props.disabled} placeholder={this.props.placeholder}/>
                <StyledButtons>
                    {this.props.children}
                </StyledButtons>
            </StyledInput>
        );
    }
};