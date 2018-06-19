import { sp } from '@pnp/sp';
import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';
import mockAssets from '../mockData/mockAssets';
import { IAssetList } from '../../sp_data_models/IAssetList';

export const FETCH_ASSETS = 'FETCH_ASSETS';
export const FETCH_ASSETS_SUCCESS = 'FETCH_ASSETS_SUCCESS';

const fetchAssetsFromList = (): Promise<IAssetList[]> => {
  return sp.web.lists
    .getByTitle('Assets')
    .items
    .select('Id', 'GUID', 'Title', 'claa', 'sicd')
    .get()
    .then(results => results.map(item => {
      return {
        id: item.Id,
        guid: item.GUID,
        title: item.Title,
        description: item.claa,
        number: item.sicd,
      };
    }));
};

export const fetchAssets = () => {
  if (Environment.type === EnvironmentType.ClassicSharePoint || Environment.type === EnvironmentType.SharePoint) {
    return (dispatch) => {
      fetchAssetsFromList().then(results => dispatch(fetchAssetsSuccess(results)));
    };
  }
  // If running from local host, we just load mock data
  return (dispatch) => {
    dispatch(fetchAssetsSuccess(mockAssets));
  };
};

export const fetchAssetsSuccess = (payload: IAssetList[]) => {
  return { type: FETCH_ASSETS_SUCCESS, payload };
};