import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import { createStore, applyMiddleware } from "redux";

export default function configureStore() {
  // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(reducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run,
  };
}
