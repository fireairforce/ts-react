import {
  editDraftAction,
  resetDraftAction,
  EDIT_DRAFT_ACTION_TYPE,
  RESET_DRAFT_ACTION_TYPE,
} from "../action";

const defaultState: IDraftState = {
  isChecked: false,
  content: "",
};

type actionType =
  | ReturnType<typeof editDraftAction>
  | ReturnType<typeof resetDraftAction>;

export default (state = defaultState, action: actionType) => {
  switch (action.type) {
    case EDIT_DRAFT_ACTION_TYPE: {
      return (action as ReturnType<typeof editDraftAction>).payload;
    }
    case RESET_DRAFT_ACTION_TYPE: {
      return state;
    }
    default: {
      return state;
    }
  }
};
