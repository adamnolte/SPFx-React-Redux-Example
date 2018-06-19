import * as counterActions from '../actions/counterActions';


export interface ICounterState {
  counter: number;
}

export const initialState: ICounterState = {
  counter: 0,
};

const counterReducer = (state = initialState, action): ICounterState => {
  switch(action.type) {
    case counterActions.INCREMENT: {
      return {
        ...state,
        counter: ++state.counter,
      }
    }
    case counterActions.DECREMENT: {
      return {
        ...state,
        counter: --state.counter,
      }
    }
    default: {
      return state;
    }
  }
}

export default counterReducer;