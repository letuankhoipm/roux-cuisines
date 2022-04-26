import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

export default function configureStore(preloadedState: any) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState);

  return store;
}
