// @ts-ignore
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { composeEnhancers } from '../utils/utils';

// configure middlewares
const middlewares = [thunk];
// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer(), initialState, enhancer);

// export store singleton instance
export default store;
