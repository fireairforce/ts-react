import React, { ChangeEventHandler, useEffect } from "react";
import { connect } from "react-redux";
import {
  editDraftAction,
  saveDraftAction,
  fetchItemById,
} from "./action/index";
import { RouteComponentProps } from "react-router-dom";
import { NEW_DRAFT_SYMBOL } from "./reducer/draft";

const mapStateToProps = (storeState: IStoreState) => ({
  draft: storeState.draft,
});

// 这个地方其实就是个泛型
type IStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {
  editDraftAction,
  saveDraftAction,
  fetchItemById,
};

type IDispatchProps = typeof mapDispatchToProps;

type IProps = IStateProps & IDispatchProps & RouteComponentProps<any>;

const Edit: React.FC = (props) => {
  useEffect(() => {
    const id = (props as IProps).match.params.id;
    if (id) {
      (props as IProps).fetchItemById(id);
    }
  });
  const Draft = (props as IProps).draft[
    (props as IProps).match.params.id || NEW_DRAFT_SYMBOL
  ];

  const onCheckboxValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    (props as IProps).editDraftAction({
      ...Draft,
      isChecked: e.target.checked,
    });
  };

  const onContentValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    (props as IProps).editDraftAction({
      ...Draft,
      content: e.target.value,
    });
  };

  const onSave = () => {
    (props as IProps).saveDraftAction(Draft.id);
  };
  return Draft ? (
    <div>
      <div>
        <input
          type="checkbox"
          checked={Draft.isChecked}
          onChange={onCheckboxValueChange}
        />
        <input
          type="text"
          value={Draft.content}
          onChange={onContentValueChange}
        />
      </div>
      <div>
        <button>取消</button>
        <button onClick={onSave}>确定</button>
      </div>
    </div>
  ) : null;
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);
