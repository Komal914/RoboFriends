import { CHANGE_SEARCH_FIELD } from "./constants";
const initialState = {
  searchField: "",
};

//reducer function for actions per state
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    //set search field state
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
