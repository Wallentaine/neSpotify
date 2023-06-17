import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, Typography } from '@mui/material';
import CreateStepWrapper from '../../components/track/CreateStepWrapper';

const Create = () => {

    const [activeStep, setActiveStep] = useState(0);

    const nextStepHandler = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
        }
    };

    const previousStepHandler = () => {
        setActiveStep(prev => prev - 1);
    };

    return (
        <MainLayout>
            <Typography variant='h2' gutterBottom color='secondary'>Загрузить</Typography>
            <CreateStepWrapper activeStep={activeStep}>

            </CreateStepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} color={'secondary'} onClick={previousStepHandler}>Предыдущий шаг</Button>
                <Button color={'secondary'} onClick={nextStepHandler}>Следующий шаг</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
