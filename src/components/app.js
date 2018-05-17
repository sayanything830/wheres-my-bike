import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createStore from '../lib/store';
import { renderIf } from '../lib/utils';
import Landing from '../components/landing';

const store = createStore();

export default class App extends React.Component {

  render() {
    return(
      <main className='application'>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path='/' component={Landing} />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
