import { editDraftAction, EDIT_DRAFT_ACTION_TYPE } from "../action";
import { IDraftState } from "../typings/store";

const defaultState: IDraftState = {
  isChecked: false,
  content: "",
};

export default (
  state = defaultState,
  action: ReturnType<typeof editDraftAction>,
) => {
  switch (action.type) {
    case EDIT_DRAFT_ACTION_TYPE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
