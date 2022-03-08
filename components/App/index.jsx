import Head from 'next/head';
import React from 'react';
import { styled } from '@stitches/react';

const StyledApp = styled('div', {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
});

export default class App extends React.Component {
    render() {
        return (
            <StyledApp>
                <Head>
                    <title>{this.props.title ?? "Voxelified"}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta property="og:title" content="Voxel"/>
                    <meta property="og:description" content="Placeholder"/>
                    <meta property="og:image" content="/voxel.png"/>
                    <meta name="theme-color" content="#121212"/>
                </Head>
                {this.props.children}
                <style jsx global>{`
                    body {
                        margin: 0px;
                        padding: 0px;
                    }
                `}</style>
            </StyledApp>
        );
    }
};