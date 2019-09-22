import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
// tslint:disable-next-line:no-submodule-imports
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";
import reducers from "../reducer";
const rootReducer = combineReducers({
  ...reducers,
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(thunk))
      : applyMiddleware(thunk),
  );
  return store;
}
