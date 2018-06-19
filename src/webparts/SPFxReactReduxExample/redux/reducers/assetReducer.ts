import * as assetActions from '../actions/assetActions';
import { IAssetList } from '../../sp_data_models/IAssetList';

export interface IAssetState {
  assets: IAssetList[];
}

export const initialState: IAssetState = {
  assets: [],
};

const assetReducer = (state = initialState, action): IAssetState => {
  switch(action.type) {
    case assetActions.FETCH_ASSETS_SUCCESS: {
      return {
        ...state,
        assets: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default assetReducer;