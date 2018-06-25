import * as React from 'react';
import { connect } from 'react-redux';
import { ListView, IViewField } from "@pnp/spfx-controls-react/lib/ListView";

import { IAppState } from '../../redux/rootReducer';
import * as listActions from '../../redux/actions/assetActions';
import { IAssetList } from '../../sp_data_models/IAssetList';
import styles from './List.module.scss';

class List extends React.Component<IListProps, {}> {
  public componentDidMount() {
    this.props.fetchAssets();
  }

  public render(): React.ReactElement<IListProps> {
    if (this.props.assets.length == 0) {
      return (<div />);
    }
    const viewFields: IViewField[] = [
      {
        name: 'id',
        displayName: 'ID',
        maxWidth: 20,
      },
      {
        name: 'title',
        displayName: 'Title',
        maxWidth: 50,
      },
      {
        name: 'description',
        displayName: 'Description'
      },
      {
        name: 'number',
        displayName: 'Number',
      }
    ];
    // https://sharepoint.github.io/sp-dev-fx-controls-react/controls/ListView/
    return (
      <div className={styles.wrapper}>
        {this.props.counter}
        <ListView
          items={this.props.assets.filter((asset) => asset.id === +this.props.match.params.id)}
          viewFields={viewFields}
        />
      </div>
    );
  }
}


export interface IListProps {
  fetchAssets: () => any;
  assets: IAssetList[];
  counter: number;
  match: {
    params: {
      id: string;
    }
  }
}

const mapStateToProps = (state: IAppState, ownProps) => {
  return {
    assets: state.assetReducer.assets,
    counter: state.counterReducer.counter,
    match: ownProps.match,
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
