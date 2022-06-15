import { styled, keyframes } from 'solid-styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoaderIcon = styled('div')`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 100%;
    border-color: ${p => p.secondary || '#e0e0e0'};
    border-right-color: ${p => p.primary || '#616161'};
    animation: ${rotate} 1s linear infinite;
`;