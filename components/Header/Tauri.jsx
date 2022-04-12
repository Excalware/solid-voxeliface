import React from 'react';

import Header from '.';
import WindowButtons from '../WindowButtons';

export default function TauriHeader(props) {
    return (
        <Header {...props}>
            <WindowButtons/>
        </Header>
    );
};