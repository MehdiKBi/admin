import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../rootReducers/rootReducers";

// Redux doesn't have any types for this extension
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const Store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeEnhancers && composeEnhancers())
);

export type RootStore = ReturnType<typeof rootReducer>;

export default Store;
