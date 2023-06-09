import React from 'react';
import { ITrack } from '../../types/track.types';
import { Card, Grid, IconButton } from '@mui/material';
import styles from '../../styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useActions } from '../../hooks/useActions';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = true }) => {
    const router = useRouter();

    const { playTrack, pauseTrack, setActiveTrack } = useActions();

    const playButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setActiveTrack(track);
        playTrack();
    };

    return (
        <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
            <img width={48} height={48} src={`http://localhost:5000/${track.picture}`} alt='' />
            <IconButton sx={{ marginX: 2 }} onClick={playButtonHandler}>
                {active ?
                    <Pause />
                    :
                    <PlayArrow />
                }
            </IconButton>
            <Grid container direction='column' style={{ width: 200 }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:43</div>}
            <IconButton style={{ marginLeft: 'auto' }} onClick={(e) => e.stopPropagation()}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;
