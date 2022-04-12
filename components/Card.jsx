import React from 'react';

import Grid from './Grid';
import Typography from './Typography';

export default function Card({ css, title, buttons, padding, children }) {
    return (
        <Grid
            direction="vertical"
            background="#222222"
            borderRadius={8}
            css={{
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',

                '@media only screen and (max-width: 768px)': {
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderRadius: 0
                },
                ...css
            }}
        >
            <Grid padding="16px 24px" alignItems="center" justifyContent="space-between" css={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
                {title == "string" ?
                    <Typography
                        text={title ?? "Card Title"}
                        size="1.2rem"
                        color="white"
                        weight={600}
                    />
                : title}
                <Grid spacing="8px" alignItems="center">
                    {buttons}
                </Grid>
            </Grid>
            <Grid wrap="wrap" padding={padding ?? "16px 24px"}>
                {children}
            </Grid>
        </Grid>
    );
};