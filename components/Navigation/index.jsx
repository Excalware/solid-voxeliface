import React from 'react';
import { styled } from '@stitches/react';
import { List } from 'react-bootstrap-icons';

import Grid from '../Grid';
import NavigationLink from './Link';
import NavigationCategory from './Category';

const MenuButtonGrid = styled(Grid, {
    top: 0,
    right: 0,
    height: 64,
    display: 'flex',
    zIndex: 10000,
    position: 'fixed',
    alignItems: 'center',
    marginRight: 16
});

const MenuButton = styled('button', {
    color: 'white',
    border: 'none',
    padding: 0,
    display: 'none',
    overflow: 'hidden',
    fontSize: '1.5rem',
    background: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',

    '&:after': {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        content: '',
        position: 'absolute',
        transform: 'scale(6, 6)',
        transition: 'transform .5s, opacity 1s',
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%'
    },

    '&:active:after': {
        opacity: .3,
        transform: 'scale(0, 0)',
        transition: '0s'
    },

    '&:hover': {
        cursor: 'pointer'
    },

    '@media screen and (max-width: 768px)': {
        display: 'flex'
    }
});

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <Grid>
                <Grid
                    background="#171717"
                    direction="vertical"
                    justifyContent="space-between"
                    css={{
                        height: '100%',
                        zIndex: 1000,
                        minWidth: '16rem',
                        overflow: 'hidden',
                        maxHeight: this.state.open ? "100%" : "0px",
                        transition: 'max-height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

                        '@media screen and (max-width: 768px)': {
                            '&': {
                                width: '100%',
                                height: '100%',
                                position: 'absolute'
                            },
                            '& > button': {
                                display: 'unset'
                            }
                        }
                    }}
                >
                    <Grid direction="vertical">
                        {this.props.data.map((category, index) =>
                            <NavigationCategory key={index} name={category[0]}>
                                {category[1].map((link, index) =>
                                    <NavigationLink key={index} name={link[0]} link={link[1]} icon={link[2]}/>
                                )}
                            </NavigationCategory>
                        )}
                    </Grid>
                    {this.props.buttons &&
                        <NavigationCategory name="">
                            {this.props.buttons.map((link, index) =>
                                <NavigationLink key={index} name={link[0]} link={link[1]} icon={link[2]}/>
                            )}
                        </NavigationCategory>
                    }
                </Grid>
                <MenuButtonGrid>
                    <MenuButton onClick={() => this.setState({ open: !this.state.open })}>
                        <List/>
                    </MenuButton>
                </MenuButtonGrid>
            </Grid>
        );
    }
};