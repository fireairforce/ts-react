import React, { ChangeEventHandler, Component } from "react";

interface IState {
  isChecked: boolean;
  content: string;
}

class Edit extends Component {
  state: IState = {
    isChecked: false,
    content: "",
  };

  onCheckboxValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({
      isChecked: e.target.checked,
    });
  };

  onContentValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  onSave = () => {
    console.log(this.state);
  };

  render() {
    const { isChecked, content } = this.state;
    return (
      <div>
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.onCheckboxValueChange}
          />
          <input
            type="text"
            value={content}
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

export default Edit;
