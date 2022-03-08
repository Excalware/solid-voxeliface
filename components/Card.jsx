import React from 'react';

import Grid from './Grid';
import Typography from './Typography';

export default class Card extends React.Component {
    render() {
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
                    ...this.props.css
                }}
            >
                <Grid padding="16px 24px" alignItems="center" justifyContent="space-between" css={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                    {this.props.title == "string" ?
                        <Typography
                            text={this.props.title ?? "Card Title"}
                            size="1.2rem"
                            color="white"
                            weight={600}
                        />
                    : this.props.title}
                    <Grid spacing="8px" alignItems="center">
                        {this.props.buttons}
                    </Grid>
                </Grid>
                <Grid wrap="wrap" padding={this.props.padding ?? "16px 24px"}>
                    {this.props.children}
                </Grid>
            </Grid>
        );
    }
};