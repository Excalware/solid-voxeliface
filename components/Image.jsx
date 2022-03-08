import React from 'react';

import Grid from './Grid';

export default class Image extends React.Component {
    render() {
        return (
            <Grid alignItems="center" justifyContent="center" {...this.props} css={{
                width: this.props.width ?? this.props.size,
                height: this.props.height ?? this.props.size,
                objectFit: 'fill',
                borderRadius: this.props.borderRadius,
                backgroundSize: 'contain',
                backgroundImage: `url(${this.props.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                ...this.props.css
            }}>
                {this.props.children}
            </Grid>
        );
    }
};