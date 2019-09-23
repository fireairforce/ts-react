import {
  editDraftAction,
  resetDraftAction,
  EDIT_DRAFT_ACTION_TYPE,
  RESET_DRAFT_ACTION_TYPE,
} from "../action";

export const NEW_DRAFT_SYMBOL = 1;

const defaultState: IDraftState = {
  id: NEW_DRAFT_SYMBOL,
  isChecked: false,
  content: "",
};

type actionType =
  | ReturnType<typeof editDraftAction>
  | ReturnType<typeof resetDraftAction>;

export default (state = defaultState, action: actionType) => {
  switch (action.type) {
    case EDIT_DRAFT_ACTION_TYPE: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case RESET_DRAFT_ACTION_TYPE: {
      return {
        ...state,
        [action.payload.id]: defaultState,
      };
    }
    default: {
      return state;
    }
  }
};
