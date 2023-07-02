import React, { useEffect } from 'react';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import styles from '../../styles/Player.module.scss';
import { ITrack } from '../../types/track.types';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';


let audio: HTMLAudioElement;

const Player: React.FC = () => {
    const { pause, active, volume, duration, currentTime } = useTypedSelector(state => state.player);

    const { playTrack, pauseTrack, setVolume, setCurrentTime, setDuration } = useActions();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            audioHandler();
            playButtonHandler();
        }
    }, [active]);

    const audioHandler = () => {
        if (active) {
            audio.src = `http://localhost:5000/${active.audio}`;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration));
            };
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            };
        }
    };

    const playButtonHandler = () => {
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    };

    const changeVolumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value));
    };

    const changeCurrentTimeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value));
    };

    if (!active) {
        return null;
    }

    return (
        <div className={styles.player}>
            <IconButton sx={{ marginX: 2 }} onClick={playButtonHandler}>
                {pause ?
                    <PlayArrow />
                    :
                    <Pause />
                }
            </IconButton>
            <Grid container direction='column' style={{ width: 200 }}>
                <div>{active?.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTimeHandler} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={volume} right={100} onChange={changeVolumeHandler} />
        </div>
    );
};

export default Player;
