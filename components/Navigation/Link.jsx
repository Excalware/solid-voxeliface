import React from 'react';
import { styled } from '@stitches/react';
import * as Icon from 'react-bootstrap-icons';

const StyledLink = styled('a', {
    width: '100%',
    color: 'white',
    display: 'flex',
    padding: '.25rem 1rem',
    fontSize: '.875rem',
    transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'space-between',
    textDecoration: 'none',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgba(255, 255, 255, 0.02)'
    },
    '&:disabled': {
        cursor: 'not-allowed'
    }
});

export default class NavigationLink extends React.Component {
    render() {
        const LinkIcon = this.props.icon && Icon[this.props.icon];
        return (
            <StyledLink href={this.props.link instanceof Function ? undefined : this.props.link} target="_self" onClick={this.props.link instanceof Function ? this.props.link : undefined} css={{
                background: this.props.onpage ? "rgba(255, 255, 255, 0.06)" : "none"
            }}>
                {this.props.name}
                {this.props.icon &&
                    <LinkIcon/>
                }
            </StyledLink>
        );
    }
};