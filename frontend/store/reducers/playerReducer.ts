import { PlayerAction, PlayerActionType, PlayerState } from '../../types/player.types';

const initialState: PlayerState = {
    currentTime: 0,
    duration: 0,
    active: null,
    pause: true,
    volume: 50,
};

export const playerReducer = (state: PlayerState = initialState, action: PlayerAction) => {
    switch (action.type) {
        case PlayerActionType.PAUSE:
            return { ...state, pause: true };
        case PlayerActionType.PLAY:
            return { ...state, pause: false };
        case PlayerActionType.SET_ACTIVE:
            return { ...state, active: action.payload, duration: 0, currentTime: 0 };
        case PlayerActionType.SET_DURATION:
            return { ...state, duration: action.payload };
        case PlayerActionType.SET_CURRENT_TIME:
            return { ...state, currentTime: action.payload };
        case PlayerActionType.SET_VOLUME:
            return { ...state, volume: action.payload };
        default:
            return state;
    }
};
