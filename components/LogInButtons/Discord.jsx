
import { Discord } from 'solid-icons/bs';

import Button from '../Button';

export default function DiscordLogin({ css, onClick }) {
    return (
        <Button
            onClick={onClick}
            css={{
                color: '#fff',
                padding: '.8rem .625rem',
                minWidth: 264,
                fontSize: '1rem',
                background: '#5865F2',
                "&:hover": {
                    color: "#E1E1E1",
                    background: "#646ed1"
                },
                "&:active": {
                    color: "#CBCBCB",
                    background: "#9aa2ed"
                },
                "&[disabled]": {
                    color: "#565656",
                    background: "#6067a8"
                },
                ...css
            }}
        >
            <Discord size={24}/>
            Continue with Discord
        </Button>
    );
};