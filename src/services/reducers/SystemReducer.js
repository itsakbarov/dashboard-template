import { CONSTANTS } from "../constants";
const INITIAL_STATE = {
  language: "ru",
};

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CONSTANTS.CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
};
