import React, { ReactNode } from 'react';
import { Container } from '@mui/system';
import { Card, Grid, Step, StepLabel, Stepper } from '@mui/material';

interface StepWrapperProps {
    activeStep: number;
    children?: ReactNode;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек']

const CreateTrackStepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper
                activeStep={activeStep}
            >
                {steps.map((step, stepIndex) =>
                    <Step
                        key={stepIndex}
                        completed={activeStep > stepIndex}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid
                container
                justifyContent={'center'}
                style={{margin: '70px 0', height: 270}}
            >
                <Card style={{width: 600}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default CreateTrackStepWrapper;
