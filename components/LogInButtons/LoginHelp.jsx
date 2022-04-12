import React from 'react';
import { ChatDotsFill } from 'react-bootstrap-icons';

import Button from '../Button';

export default function LoginHelp({ css, onClick }) {
    return (
        <Button
            onClick={onClick}
            css={{
                color: '#fff',
                padding: '.8rem .625rem',
                minWidth: 264,
                fontSize: '1rem',
                background: '#ae8bbf',
                "&:hover": {
                    color: "#E1E1E1",
                    background: "#9d7dad"
                },
                "&:active": {
                    color: "#CBCBCB",
                    background: "#c49ad9"
                },
                "&[disabled]": {
                    color: "#565656",
                    background: "#6b5278"
                },
                ...css
            }}
        >
            <ChatDotsFill size={24}/>
            Get Assistance
        </Button>
    );
};