import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}

/**
 * NB: applyMiddleware(reduxImmutableStateInvariant()) this middleware will warn us when we mutate state in the store
 * Wrapping composeEnhancers will enable us to use redux devtool in the browser
 *
 */
