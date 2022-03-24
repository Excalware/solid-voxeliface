import React from 'react';

import Header from './Header';
import WindowButtons from '../WindowButtons';

export default class TauriHeader extends React.Component {
    render() {
        return (
            <Header {...this.props}>
                <WindowButtons/>
            </Header>
        );
    }
};