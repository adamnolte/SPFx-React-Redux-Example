import { Store, applyMiddleware, createStore, compose, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import rootReducer, { IAppState } from './rootReducer';
import { ICounterState } from './reducers/counterReducer';
import { IAssetState } from './reducers/assetReducer';

const configureStore = (initialState?) => {
  const enhancedMiddleware = compose(
    applyMiddleware(thunk), window['devToolsExtension'] ? window['devToolsExtension']() : (f) => { return f; }
  );

  return createStore(rootReducer, initialState, enhancedMiddleware);
}

const store = configureStore();

export default store;