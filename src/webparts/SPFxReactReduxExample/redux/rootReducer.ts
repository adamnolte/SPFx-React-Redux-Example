import { combineReducers, AnyAction } from 'redux';
import counterReducer, { ICounterState } from './reducers/counterReducer';
import assetReducer, { IAssetState } from './reducers/assetReducer';

export interface IAppState {
  counterReducer: ICounterState;
  assetReducer: IAssetState;
}

export default combineReducers({
  counterReducer,
  assetReducer,
});