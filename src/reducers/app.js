import { SET_CURRENT_USER, INIT_APP, SET_POST_EDIT } from "../types";

const initState = {
  currentUser: null,
  appInit: false,
  postEdit: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        appInit: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_POST_EDIT:
      return {
        ...state,
        postEdit: action.payload,
      };
    default:
      return state;
  }
};
