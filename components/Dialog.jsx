
import { styled, keyframes } from 'solid-stitches';
import { blackA, mauveDark } from '@radix-ui/colors';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
});

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
    inset: 0,
    position: 'fixed',
    backgroundColor: blackA.blackA9,

    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    }
});

const StyledContent = styled(DialogPrimitive.Content, {
    top: '50%',
    left: '50%',
    width: '90vw',
    padding: 25,
    position: 'fixed',
    maxWidth: '450px',
    maxHeight: '85vh',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    borderRadius: 6,
    backgroundColor: '#1e1e1e',

    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
    '&:focus': { outline: 'none' },
});

function ContentComponent({ children, ...props }) {
    return <DialogPrimitive.Portal>
        <StyledOverlay/>
        <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>;
}

const StyledTitle = styled(DialogPrimitive.Title, {
    color: mauveDark.mauve12,
    margin: 0,
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Nunito'
});
  
const StyledDescription = styled(DialogPrimitive.Description, {
    color: mauveDark.mauve11,
    margin: '6px 0 20px',
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 500,
    fontFamily: 'Raleway',
    letterSpacing: .4
});

export const Root = DialogPrimitive.Root;
export const Trigger = DialogPrimitive.Trigger;
export const Content = ContentComponent;
export const Title = StyledTitle;
export const Description = StyledDescription;
export const Close = DialogPrimitive.Close;