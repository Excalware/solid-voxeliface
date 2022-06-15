import { styled } from 'solid-stitches';
import { exit } from '@tauri-apps/api/process';
import { appWindow } from '@tauri-apps/api/window';
import { BsXLg, BsFullscreen, BsFullscreenExit } from 'solid-icons/bs';

import Grid from './Grid';

const StyledWindowButtons = styled(Grid, {
    height: "100%"
});

const WindowButtonComponent = styled('button', {
    color: "#cccbcb",
    border: "none",
    cursor: "pointer",
    padding: 0,
    fontSize: "1rem",
    background: "none",
    transition: "color 0.2s",

    "&:hover": {
        color: "#fff"
    }
});

export default function WindowButtons() {
    const maximize = _ => appWindow.toggleMaximize();
    const minimize = _ => appWindow.minimize();
    const close = _ => exit();
    return (
        <StyledWindowButtons spacing="16px" direction="horizontalReverse" alignItems="center">
            <WindowButtonComponent color="#ff7070" onClick={close} style={{
                "&:hover": {
                    color: "#ff7070"
                }
            }}>
                <BsXLg/>
            </WindowButtonComponent>
            <WindowButtonComponent onClick={maximize}>
                <BsFullscreen/>
            </WindowButtonComponent>
            <WindowButtonComponent onClick={minimize}>
                <BsFullscreenExit/>
            </WindowButtonComponent>
        </StyledWindowButtons>
    );
};