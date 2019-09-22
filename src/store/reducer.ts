import * as types from "./types";
export function CountReducer(state = 0, action: types.AddCountAction) {
  switch (action.type) {
    case types.ADD_COUNT:
      return state + 1;
    default:
      return state;
  }
}
