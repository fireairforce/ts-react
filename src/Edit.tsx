import React, { ChangeEventHandler, Component } from "react";
import { connect } from "react-redux";
import { editDraftAction, saveDraftAction } from "./action/index";

const mapStateToProps = (storeState: IStoreState) => ({
  draft: storeState.draft,
});

// 这个地方其实就是个泛型
type IStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {
  editDraftAction,
  saveDraftAction,
};

type IDispatchProps = typeof mapDispatchToProps;

type IProps = IStateProps & IDispatchProps;

class Edit extends Component<IProps> {
  onCheckboxValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    this.props.editDraftAction({
      ...this.props.draft,
      isChecked: e.target.checked,
    });
  };

  onContentValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    this.props.editDraftAction({
      ...this.props.draft,
      content: e.target.value,
    });
  };

  onSave = () => {
    this.props.saveDraftAction();
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            checked={this.props.draft.isChecked}
            onChange={this.onCheckboxValueChange}
          />
          <input
            type="text"
            value={this.props.draft.content}
            onChange={this.onContentValueChange}
          />
        </div>
        <div>
          <button>取消</button>
          <button onClick={this.onSave}>确认</button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);
