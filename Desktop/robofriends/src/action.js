import { CHANGE_SEARCH_FIELD } from "./contants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
