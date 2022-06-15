import Head from 'next/head';

import { styled } from 'solid-stitches';

const StyledApp = styled('div', {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
});

export default function App({ title, children, description, ...props }) {
    return (
        <StyledApp {...props}>
            <Head>
                <title>{title ?? "Missing Title"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content={description ?? "Missing Description"}/>
                <meta property="og:title" content="Voxel"/>
                <meta property="og:description" content="Placeholder"/>
                <meta property="og:image" content="/voxel.png"/>
                <meta name="theme-color" content="#121212"/>
            </Head>
            {children}
            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                }
            `}</style>
        </StyledApp>
    );
};