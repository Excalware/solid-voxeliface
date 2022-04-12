import React from 'react';
import { styled, keyframes } from '@stitches/react';

import Grid from './Grid';
import Typography from './Typography';

import util from '/lib/util';

const DividerComponent = styled('div', {
    width: 1,
    height: 1,
    flexGrow: 1,
    background: 'rgba(255, 255, 255, 0.2)'
});

const StepComponent = styled('div', {
    display: 'flex',
    minWidth: 28,
    minHeight: 28,
    alignItems: 'center',
    borderRadius: '50%',
    justifyContent: 'center'
});

const StepComponent2 = styled('div', {
    display: 'flex',
    padding: '0 8px 0 12px',
    minWidth: 28,
    minHeight: 28,
    alignItems: 'center',
    borderRadius: '14px 0 0 14px',
});

const animation = keyframes({
    from: {
        left: 0
    },
    to: {
        left: '-100%'
    }
});

const GridHolder = styled(Grid, {
    overflow: 'hidden',
    maxWidth: '100%'
});

const MobileGrid = styled(Grid, {
    borderRadius: 14,
    paddingRight: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
});

export default function Stepper({ step, steps }) {
    const isMobile = util.isMobile();
    const stepIndex = 0;
    for (let i = 1; i < steps.length; i += 2)
        steps.splice(i, 0, "divide");
    
    return (
        <Grid width={isMobile ? "100%" : null} direction="vertical">
            <Grid padding={isMobile ? "16px" : "24px"} css={{
                alignItems: 'center',
                background: '#2C2C2C',
                borderRadius: 8,
                justifyContent: 'center',

                '@media screen and (max-width: 768px)': {
                    borderRadius: 0
                }
            }}>
                {
                    isMobile ?
                        <MobileGrid spacing="8px" alignItems="center">
                            <StepComponent2 css={{
                                color: '#00E87E'
                            }}>
                                <Typography text={`Step ${step + 1}/${steps.length}`} size="0.75rem" color={"#000000de"}/>
                            </StepComponent2>
                            <Typography text={steps[step][0]} size="12px" color="white" weight={500}/>
                        </MobileGrid>
                    :
                        steps.map((step, index) =>
                            step == "divide" ?
                                <DividerComponent key={index}/>
                            :
                                <Grid key={index} margin="0 8px" spacing="8px" alignItems="center">
                                    <StepComponent css={{
                                        background: stepIndex <= step ? "#00E87E" : "rgba(255, 255, 255, 0.5)"
                                    }}>
                                        <Typography text={stepIndex += 1} size="0.75rem" color={"#000000de"}/>
                                    </StepComponent>
                                    <Typography text={step[0]} size="14px" color={stepIndex - 1 <= step ? "white" : "rgba(255, 255, 255, 0.5)"} weight={stepIndex - 1 <= step ? 500 : 300}/>
                                </Grid>
                        )
                }
            </Grid>
            <GridHolder width="100%">
                <Grid key={1 + step} width="100%" direction="vertical" alignItems="center" css={{
                    minWidth: '100%',
                    position: 'relative',
                    animation: `${animation} 1s cubic-bezier(0.4, 0, 0.2, 1)`,
                    animationFillMode: 'forwards'
                }}>
                    {step == 0 ? null : steps[step - 1][1]}
                </Grid>
                <Grid key={2 + step} width="100%" direction="vertical" alignItems="center" css={{
                    minWidth: '100%',
                    position: 'relative',
                    animation: `${animation} 1s cubic-bezier(0.4, 0, 0.2, 1)`,
                    animationFillMode: 'forwards'
                }}>
                    {step == 0 ? steps[0][1] : steps[step][1]}
                </Grid>
            </GridHolder>
        </Grid>
    );
};