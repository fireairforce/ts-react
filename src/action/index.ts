import { Dispatch } from "redux";

const headers = new Headers({ "content-type": "application/json" });

export const EDIT_DRAFT_ACTION_TYPE = "draft/edit";
export const editDraftAction = (payload: IDraftState) => ({
  type: EDIT_DRAFT_ACTION_TYPE,
  payload,
});

export const SAVE_DRAFT_ACTION_TYPE = "draft/save";
export const saveDraftAction = () => {
  return (dispatch: Dispatch, getState) => {
    const draft = getState().draft;
    fetch("http://localhost:3000/work-items", {
      headers,
      method: "post",
      body: JSON.stringify(draft),
    }).then(() => {
      dispatch(resetDraftAction());
    });
  };
};

export const RESET_DRAFT_ACTION_TYPE = "draft/reset";
export const resetDraftAction = () => ({
  type: RESET_DRAFT_ACTION_TYPE,
});
