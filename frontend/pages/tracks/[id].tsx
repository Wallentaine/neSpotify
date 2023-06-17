import React from 'react';
import { ITrack } from '../../types/track.types';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const TrackPage = () => {

    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Some words 1',
        listens: 3,
        audio: '',
        picture: '',
        comments: [],
    };

    const router = useRouter();

    return (
        <MainLayout>
            <Button
                variant={'outlined'}
                color={'secondary'}
                style={{ fontSize: 32 }}
                onClick={() => router.push(`/tracks`)}
            >
                К списку
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={track.picture} width={200} height={200} alt='' />
                <div style={{ marginLeft: 30 }}>
                    <Typography variant='h3' gutterBottom color='secondary'>Название - {track.name}</Typography>
                    <Typography variant='h5' gutterBottom color='secondary'>Исполнитель - {track.artist}</Typography>
                    <Typography variant='h5' gutterBottom color='secondary'>Прослушиваний - {track.listens}</Typography>
                </div>
            </Grid>
            <Typography variant='h5' gutterBottom color='secondary'>Слова в треке</Typography>
            <p>{track.text}</p>

            <Typography variant='h2' gutterBottom color='secondary'>Комментарии</Typography>
            <Grid container>
                <TextField
                    label={'Ваше имя'}
                    fullWidth
                    color={'secondary'}
                />
                <TextField
                    label={'Комментарий'}
                    fullWidth
                    multiline={true}
                    color={'secondary'}
                    rows={4}
                />
                <Button
                    color={'secondary'}
                >
                    Отправить
                </Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;
