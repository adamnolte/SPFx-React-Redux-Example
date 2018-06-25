import * as React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { BaseComponentContext } from '@microsoft/sp-component-base';
import Counter from './Counter/Counter';
import List from './List/List';

class App extends React.Component<IAppProps, {}> {
  public render(): React.ReactElement<IAppProps> {
    return (
      <Router>
        <Switch>
          <Route path='/counter' component={Counter} />
          <Route path='/list/:id?' component={List} />
          <Redirect to={'/list/1'} />
        </Switch>
      </Router>
    );
  }
}


export interface IAppProps {
}

export default App;