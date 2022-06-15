import { createStitches } from 'solid-stitches';

const { styled, createTheme } = createStitches({
    theme: {
        colors: {
            primaryColor: '#fff',
            secondaryColor: '#c7c7c7',

            headerBackground: '#121212',

            primaryBackground: '#1c1c1c',
            secondaryBackground: '#161616',
            secondaryBackground2: '#242424',

            secondaryBorder: '#303030',
            secondaryBorder2: '#4e4e4e',

            tagColor: '#c7c7c7',
            tagBorder: '#4e4e4e',
            tagBackground: '#464646',
        }
    }
});

const lightTheme = createTheme({
    colors: {
        primaryColor: '#2a3338',
        secondaryColor: '#717d85',
        
        headerBackground: '#64686a',

        primaryBackground: 'gray.gray6',
        secondaryBackground: '#cacfd1',
        secondaryBackground2: '#cacfd1',

        secondaryBorder: '#c4cacd',
        secondaryBorder2: '#b5c6cf',

        tagColor: 'gray.gray11',
        tagBorder: '#a6b0b5',
        tagBackground: 'gray.gray6',
    }
});

const purpleTheme = createTheme({
    colors: {
        primaryColor: '#eedcff',
        secondaryColor: '#bcaccb',

        headerBackground: '#2b212c',

        primaryBackground: '#4f4554',
        secondaryBackground: '#6f5c78',
        secondaryBackground2: '#5f5066',

        secondaryBorder: '#65566c',
        secondaryBorder2: '#816c8b',

        tagColor: '#f4dfff',
        tagBorder: '#9b7fa1',
        tagBackground: '#938499',
    }
});

function getTheme(theme) {
    switch(theme) {
        case 'default':
        case 'dark':
            return null;
        case 'light':
            return lightTheme;
        case 'purple':
            return purpleTheme;
    }
}

export { styled, getTheme, lightTheme, purpleTheme, createTheme };