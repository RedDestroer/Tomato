import configureStore from './configureStore';

const initialState = {};

const store = configureStore(initialState);

// store as singleton
export default store;
