import { sp } from '@pnp/sp';
import { IAssetList } from '../../sp_data_models/IAssetList';

export const FETCH_ASSETS = 'FETCH_ASSETS';
export const FETCH_ASSETS_SUCCESS = 'FETCH_ASSETS_SUCCESS';

const fetchAssetsFromList = (): Promise<IAssetList[]> => {
  return sp.web.lists
    .getById('02480b64-497f-4028-95cb-f91d92294ab3')
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
  return (dispatch) => {
    fetchAssetsFromList().then(results => dispatch(fetchAssetsSuccess(results)));
  };
};

export const fetchAssetsSuccess = (payload: IAssetList[]) => {
  return { type: FETCH_ASSETS_SUCCESS, payload };
};