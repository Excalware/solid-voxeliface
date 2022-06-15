
import { styled } from 'solid-stitches';
import { Check } from 'solid-icons/bs';

import Grid from '../Grid';

const StyledSelectItem = styled('div', {
    gap: 16,
    display: 'flex',
    padding: '6px 16px',
    background: '$primaryBackground',
    transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    whiteSpace: 'pre',
    alignItems: 'center',
    borderBottom: '1px solid $tagBorder',
    justifyContent: 'space-between',

    '&:hover': {
        backgroundColor: '$secondaryBackground2'
    }
});

export default function SelectItem({ _set, _sel, value, children }) {
    return (
        <StyledSelectItem onClick={() => _set(value)}>
            <Grid width="fit-content" spacing="12px" alignItems="center">
                {children}
            </Grid>
            {_sel && <Check size={24}/>}
        </StyledSelectItem>
    );
};