import React from 'react';

import Grid from '../Grid';
import Typography from '../Typography';

export default class NavigationCategory extends React.Component {
    render() {
        return (
            <Grid width="100%" padding="1.25rem .75rem" direction="vertical">
                <Typography text={this.props.name} size=".875rem" color="#bbbbbb" margin=".5rem 1rem"/>
                <Grid spacing="4px" direction="vertical">
                    {this.props.children}
                </Grid>
            </Grid>
        );
    }
};