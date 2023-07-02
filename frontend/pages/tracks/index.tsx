import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import TrackList from '../../components/track/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks } from '../../store/actions-creators/tracks';

const Index = () => {

    const router = useRouter();

    const { tracks, error } = useTypedSelector(state => state.tracks);

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <Typography variant='h2' gutterBottom color='secondary'>Список треков</Typography>
                            <Button
                                variant='text'
                                color='secondary'
                                onClick={() => router.push('/tracks/create')}
                            >
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList
                        tracks={tracks}
                    />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
    return {
        props: {},
    };
});
