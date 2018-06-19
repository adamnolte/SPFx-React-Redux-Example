import * as React from 'react';
import { BaseComponentContext } from '@microsoft/sp-component-base';
import Counter from './Counter/Counter';
import List from './List/List';

class App extends React.Component<IAppProps, {}> {
  public render(): React.ReactElement<IAppProps> {
    return (
      <div>
        <Counter />
        <List />
      </div>
    );
  }
}


export interface IAppProps {
}

export default App;