import { AnyAction, combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { HYDRATE } from 'next-redux-wrapper';
import { trackReducer } from './trackReducer';

export const rootReducer = combineReducers({
    player: playerReducer,
    tracks: trackReducer,
})

export const reducer = (state: any, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        default:
            return rootReducer(state, action)
    }
};

export type RootState = ReturnType<typeof rootReducer>
