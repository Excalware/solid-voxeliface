import React from 'react';
import { styled } from '@stitches/react';
import { CheckCircle, InfoCircle, ExclamationTriangle, ExclamationCircle } from 'react-bootstrap-icons';

import Grid from './Grid';
import Typography from './Typography';

const Icons = {
    success: CheckCircle,
    info: InfoCircle,
    warning: ExclamationTriangle,
    error: ExclamationCircle
};

const StyledAlert = styled('div', {
    border: '1px solid #ffffff0d',
    display: 'flex',
    padding: '6px 16px',
    borderRadius: 8,

    variants: {
        severity: {
            success: {
                color: '#5CFFB5',
                background: '#00351D',

                '& svg': {
                    fill: '#00E87E'
                }
            },
            info: {
                color: '#80D0FF',
                background: '#002E49',

                '& svg': {
                    fill: '#2BB1FF'
                }
            },
            warning: {
                color: '#FBE3A2',
                background: '#564004',

                '& svg': {
                    fill: '#f8d063'
                }
            },
            error: {
                color: '#F9A29E',
                background: '#510905',

                '& svg': {
                    fill: '#F4645D'
                }
            }
        }
    }
});

export default class Alert extends React.Component {
    render() {
        const AlertIcon = Icons[this.props.severity];
        return (
            <StyledAlert
                severity={this.props.severity ?? "success"}
                direction="horizontal"
                css={{
                    margin: this.props.margin,
                    minWidth: this.props.width
                }}
            >
                <Grid margin="10px 12px 10px 0" direction="vertical">
                    <AlertIcon size={16} color={'#fff'}/>
                </Grid>
                <Grid margin="8px 0" direction="vertical">
                    <Typography text={this.props.title} size="1rem" color="inherit" margin="0 0 0.35em 0"/>
                    <Typography text={this.props.body} size="0.9rem" color="inherit"/>
                </Grid>
            </StyledAlert>
        );
    }
}