import { createSignal, ErrorBoundary } from 'solid-js';
import { BsBack, BsArrowClockwise, BsExclamationTriangleFill } from 'solid-icons/bs';

import Grid from '../Grid';
import Button from '../Button';
import Typography from '../Typography';
import ThemeContext from '../../contexts/theme';

import { getTheme } from '../../lib/themes';
export default function TauriApp({ css, theme: theme2, children, ...props }) {
    const [theme, setTheme] = createSignal({
        theme: theme2 ?? 'default',
        setTheme: value => setTheme({
            theme: value,
            setTheme: theme().setTheme
        })
    });
    return (
        <ThemeContext.Provider value={theme()}>
            <Grid width="100vw" height="100vh" className={getTheme(theme().theme)} direction="vertical" {...props} css={{
                maxWidth: '100vw',
                minWidth: '100vw',
                overflow: 'hidden',
                maxHeight: '100vh',
                minHeight: '100vh',
                borderRadius: 8,
                ...css
            }}>
                <ErrorBoundary
                    fallback={(error, reset) => (
                        <Grid width="100%" height="100%" direction="vertical" alignItems="center" background="$primaryBackground" justifyContent="center">
                            <Typography size="1.3rem" color="$primaryColor" weight={700} family="Nunito" lineheight={1.5}>
                                <BsExclamationTriangleFill size={40} style={{ margin: '0 12px' }}/>
                                Crashed!
                            </Typography>
                            <Typography size=".9rem" color="$secondaryColor" margin="12px 0 0" family="Nunito">
                                Looks like the application crashed unexpectedly...<br/>
                                "{error.message}"
                            </Typography>
                            <Grid margin="1.5rem 0 0" spacing="8px">
                                <Button onClick={() => location.reload()}>
                                    <BsArrowClockwise/>
                                    Reload Application
                                </Button>
                                <Button theme="secondary" onClick={() => reset()}>
                                    <BsBack/>
                                    Quick Refresh
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                >
                    {children}
                </ErrorBoundary>
            </Grid>
        </ThemeContext.Provider>
    );
};