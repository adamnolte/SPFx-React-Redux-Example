import * as React from 'react';
import { connect } from 'react-redux';
import { ListView } from "@pnp/spfx-controls-react/lib/ListView";

import { IAppState } from '../../redux/rootReducer';
import * as listActions from '../../redux/actions/assetActions';
import { IAssetList } from '../../sp_data_models/IAssetList';
import styles from './List.module.scss';

class List extends React.Component<IListProps, {}> {
  public componentDidMount() {
    this.props.fetchAssets();
  }

  public render(): React.ReactElement<IListProps> {
    // https://sharepoint.github.io/sp-dev-fx-controls-react/controls/ListView/
    return (
      <div className={styles.wrapper}>
        <ListView
          items={this.props.assets}
        />
      </div>
    );
  }
}


export interface IListProps {
  fetchAssets: () => any;
  assets: IAssetList[];
}

const mapStateToProps = (state: IAppState) => {
  return {
    assets: state.assetReducer.assets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAssets: () => {
      dispatch(listActions.fetchAssets());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
