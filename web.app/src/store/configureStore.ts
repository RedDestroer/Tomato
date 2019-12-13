import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState: any) {
  const enhancers = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(rootReducer, initialState, enhancers);

  return store;
}
