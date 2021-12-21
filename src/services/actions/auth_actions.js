import {
    CONSTANTS
} from "../constants";

export const setAuthTokens = (data) => ({
    type: CONSTANTS.SET_AUTH_TOKENS,
    payload: {
        accessToken: data && data.access,
        refreshToken: data && data.refresh,
    },
});

export const refreshAccessToken = (token) => ({
    type: CONSTANTS.REFRESH_ACCESS_TOKEN,
    payload: token,
});

export const logout = () => ({
    type: CONSTANTS.CLEAR_ON_SIGNOUT,
});
