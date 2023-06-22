import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField, Typography } from '@mui/material';
import CreateTrackStepWrapper from '../../components/track/CreateTrackStepWrapper';
import UploadFile from '../../components/UI/File/UploadFile';

const Create = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState();
    const [audio, setAudio] = useState();


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
            <CreateTrackStepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={'column'} style={{ padding: 20 }}>
                        <TextField
                            style={{ marginTop: 10 }}
                            label={'Название трека'}
                        />
                        <TextField
                            style={{ marginTop: 10 }}
                            label={'Имя исполнителя'}
                        />
                        <TextField
                            style={{ marginTop: 10 }}
                            label={'Текст песни'}
                            multiline={true}
                            rows={4}
                        />
                    </Grid>
                }

                {activeStep === 1 &&
                    <UploadFile
                        setFile={setPicture}
                        accept={'image/*'}
                    >
                        <Button>
                            Загрузить изображение
                        </Button>
                    </UploadFile>
                }

                {activeStep === 2 &&
                    <UploadFile
                        setFile={setAudio}
                        accept={'audio/*'}
                    >
                        <Button>
                            Загрузить аудио
                        </Button>
                    </UploadFile>
                }
            </CreateTrackStepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} color={'secondary'} onClick={previousStepHandler}>
                    Предыдущий шаг
                </Button>
                <Button color={'secondary'} onClick={nextStepHandler}>{activeStep === 2 ? 'Загрузить трек' : 'Следующий шаг'}</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
