import { Dispatch } from 'redux';
import { TrackAction, TrackActionTypes } from '../../types/track.types';
import axios from 'axios';


export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/track');
            dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
        } catch (error) {
            dispatch({ type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: 'Произошла ошибка!' });
        }
    };
};
