import React from 'react';
import { ITrack } from '../../types/track.types';
import { Card } from '@mui/material';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    return (
        <Card sx={{padding: 2, marginBottom: 2}}>
            {track.name}
        </Card>
    );
};

export default TrackItem;
