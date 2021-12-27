import {CONSTANTS} from "../constants";

const INITIAL_STATE = {
    accessToken: "",
    refreshToken: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANTS.SET_AUTH_CREDENTIALS:
            return {
                ...state,
                phoneNumber: action.payload,
            };
        case CONSTANTS.SET_AUTH_TOKENS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            };
        case CONSTANTS.REFRESH_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload,
            };
        case CONSTANTS.CLEAR_ON_SIGNOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};
