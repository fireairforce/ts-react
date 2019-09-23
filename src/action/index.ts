import { Dispatch } from "redux";
import { NEW_DRAFT_SYMBOL } from "../reducer/draft";

const headers = new Headers({ "content-type": "application/json" });

export const EDIT_DRAFT_ACTION_TYPE = "draft/edit";
export const editDraftAction = (payload: IDraftState) => ({
  type: EDIT_DRAFT_ACTION_TYPE,
  payload,
});

export const SAVE_DRAFT_ACTION_TYPE = "draft/save";
export const saveDraftAction = (id: number) => {
  return (dispatch: Dispatch, getState) => {
    const draft = getState().draft[id];
    if (id === NEW_DRAFT_SYMBOL) {
      fetch("http://localhost:3000/work-items", {
        headers,
        method: "post",
        body: JSON.stringify(draft),
      }).then(() => {
        dispatch(resetDraftAction(id));
      });
    } else {
      fetch(`http://localhost:3000/work-items/${id}`, {
        headers,
        method: "put",
        body: JSON.stringify(draft),
      }).then(() => {
        dispatch(resetDraftAction(id));
      });
    }
  };
};

export const RESET_DRAFT_ACTION_TYPE = "draft/reset";
export const resetDraftAction = (id: number) => ({
  type: RESET_DRAFT_ACTION_TYPE,
  payload: {
    id,
  },
});

export const fetchList = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3000/work-items", { headers });
    const data = await res.json();
    dispatch(fetchListSuccess(data));
  };
};

export const FETCH_LIST_SUCCESS_TYPE = "list/success";
export const fetchListSuccess = (payload: IList) => ({
  type: FETCH_LIST_SUCCESS_TYPE,
  payload,
});

export const fetchItemById = (id: number) => {
  return async (dispath) => {
    const res = await fetch(`http://localhost:3000/work-items/${id}`, {
      headers,
    });
    const data = await res.json();
    dispath(editDraftAction(data));
  };
};
