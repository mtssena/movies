import { applyMiddleware, compose, createStore } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import Reducers from "./Ducks";
import Sagas from "../Sagas";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, Reducers);

let sagaMiddleware;
let store;

sagaMiddleware = createSagaMiddleware();
store = createStore(
  persistedReducer,
  compose(applyMiddleware(middleware, sagaMiddleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(Sagas);

export { persistor, store };
