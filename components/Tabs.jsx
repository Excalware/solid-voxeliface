import React from 'react';
import { styled } from '@stitches/react';

const StyledTabs = styled('div', {
    width: '100%',
    border: '1px solid $secondaryBorder',
    display: 'flex',
    overflow: 'hidden',
    borderRadius: 4,
    flexDirection: 'column'
});

const StyledTabsContainer = styled('div', {
    width: '100%',
    height: '32px',
    display: 'flex',
    userSelect: 'none',
    background: '$secondaryBackground2'
});

const StyledTab = styled('button', {
    color: '$secondaryColor',
    height: '100%',
    border: 'none',
    padding: 0,
    flexGrow: 1,
    fontSize: '.75rem',
    fontWeight: 500,
    background: 'none',
    fontFamily: 'Nunito, sans-serif',

    '&:hover': {
        cursor: 'pointer'
    }
});

const StyledPages = styled('div', {
    width: '100%',
    display: 'flex',
    padding: '.6rem .8rem',
    overflow: 'hidden',
    background: '#0000001a',
    flexDirection: 'column'
});

export default function Tabs({ css, tabs, pages, value, onChange }) {
    pages = pages.filter(p => p);
    tabs = tabs.filter(t => t && !t[2]);

    let tab = tabs.find(p => p[1] === value);
    let page = pages.find(p => p[0] === value);
    if(!tab) {
        page = pages[tabs[0][1]];
        value = tabs[0][1];
    }
    return (
        <StyledTabs css={{
            borderRadius: page[3] && 0,
            ...css
        }}>
            <StyledTabsContainer css={{
                borderRadius: page[3] && 0
            }}>
                {tabs.map(([text, val], index) =>
                    <StyledTab key={index} css={{
                        color: value === val && '$primaryColor',
                        fontWeight: value === val && 625,
                        paddingTop: value === val ? 2 : 0,
                        borderBottom: value === val ? '2px solid #6fa95b' : 'none'
                    }} onClick={_ => onChange({ target: { value: val }})}>
                        {text}
                    </StyledTab>
                )}
            </StyledTabsContainer>
            <StyledPages css={{
                height: '100%',
                padding: page[2] && 0,
                overflow: 'hidden auto'
            }}>
                {page[1]}
            </StyledPages>
        </StyledTabs>
    );
};