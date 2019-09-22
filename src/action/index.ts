export const EDIT_DRAFT_ACTION_TYPE = "draft/edit";
export const editDraftAction = (payload: IDraftState) => ({
  type: EDIT_DRAFT_ACTION_TYPE,
  payload,
});

export const SAVE_DRAFT_ACTION_TYPE = "draft/save";
export const saveDraftAction = () => ({
  type: SAVE_DRAFT_ACTION_TYPE,
});

export const RESET_DRAFT_ACTION_TYPE = "draft/reset";
export const resetDraftAction = () => ({
  type: RESET_DRAFT_ACTION_TYPE,
});
