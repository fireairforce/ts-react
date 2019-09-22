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

const persistConfig: PersistConfig = {
  key: "root",
  storage,
  whitelist: ["draft"],
};

const persistedReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer,
);

const store = createStore(
  persistedReducer,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk),
);
const persistor = persistStore(store);
export { store, persistor };
