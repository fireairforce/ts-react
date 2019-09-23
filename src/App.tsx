import React, { useEffect } from "react";
import "./App.css";
import { fetchList } from "./action";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

const mapStateToProps = (storeState: IStoreState) => ({
  list: storeState.list,
});

type IStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {
  fetchList,
};

type IDispatchProps = typeof mapDispatchToProps;
type IProps = IStateProps & IDispatchProps;

const App: React.FC = (props) => {
  useEffect(() => {
    (props as IProps).fetchList();
  });
  const navigateToEditor = (id?: number) => {
    (props as RouteComponentProps).history.push(`/edit/${id}`);
  };
  return (
    <div>
      <header>
        <h1>Weclcome to the OOP World!</h1>
      </header>
      <ul>
        {(props as IProps).list &&
          (props as IProps).list.map((item, index) => (
            <li
              key={`${item.content}-${index}`}
              onClick={() => {
                navigateToEditor(item.id);
              }}
            >
              {item.isChecked ? "完成" : "未完成"} - {item.content}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(App);
