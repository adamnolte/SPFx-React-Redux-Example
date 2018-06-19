import * as React from 'react';
import { connect } from 'react-redux';
import * as strings from 'SPFxReactReduxExampleWebPartStrings';

import { IAppState } from '../../redux/rootReducer';
import * as listActions from '../../redux/actions/counterActions';
import styles from './Counter.module.scss';

class Counter extends React.Component<ICounterProps, {}> {
  public render(): React.ReactElement<ICounterProps> {
    return (
      <div className={ styles.helloWorld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p className={ styles.subTitle }>{this.props.counter}</p>
              <button className={styles.button} onClick={this.props.increment}>
                {strings.Increment}
              </button>
              <button className={styles.button} onClick={this.props.decrement}>
                {strings.Decrement}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export interface ICounterProps {
  increment: () => any;
  decrement: () => any;
  counter: number;
}

const mapStateToProps = (state: IAppState) => {
  return {
    counter: state.counterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(listActions.increment());
    },
    decrement: () => {
      dispatch(listActions.decrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
