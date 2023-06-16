import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track.types';
import TrackList from '../../components/track/TrackList';

const Index = () => {

    const router = useRouter();

    const tracks: ITrack[] = [
        {
            _id: '1',
            name: 'Track 1',
            artist: 'Artist 1',
            text: 'Some words 1',
            listens: 3,
            audio: '',
            picture: '',
            comments: [],
        },
        {
            _id: '2',
            name: 'Track 2',
            artist: 'Artist 2',
            text: 'Some words 2',
            listens: 5,
            audio: '',
            picture: '',
            comments: [],
        },
        {
            _id: '3',
            name: 'Track 3',
            artist: 'Artist 3',
            text: 'Some words 3',
            listens: 10,
            audio: '',
            picture: '',
            comments: [],
        },
    ];

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
