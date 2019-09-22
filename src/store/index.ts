import { combineReducers, createStore } from "redux";
import { CountReducer } from "./reducer";

const rootReducer = combineReducers({
  count: CountReducer,
});

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
