import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Version } from '@microsoft/sp-core-library';
import { sp } from '@pnp/sp';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import store from './redux/store';
import * as strings from 'SPFxReactReduxExampleWebPartStrings';
import App from './components/App';

export interface ICounterWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<ICounterWebPartProps> {

  // SPFx Webpart lifecycle method
  // Called once on web part init
  protected onInit(): Promise<void> {
    return super.onInit().then(_ => {
      sp.setup({
        sp: {
          headers: {
            "Accept": "application/json; odata=nometadata",
          },
        },
      });
    })
  }

  public render(): void {
    const element = (
      <Provider store={store}>
        <App context={this.context}/>
      </Provider>
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
