import React from 'react';

import Grid from '../Grid';

export default function TauriApp(props) {
    return (
        <Grid width="100vw" height="100vh" direction="vertical" {...props} css={{
            maxWidth: '100vw',
            minWidth: '100vw',
            overflow: 'hidden',
            maxHeight: '100vh',
            minHeight: '100vh',
            borderRadius: 8
        }}>
            {props.children}
        </Grid>
    );
};