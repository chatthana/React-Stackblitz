import React, { Component } from 'react';
import { render } from 'react-dom';
import Girl from './Girl';
import FormZone from './FormZone';
import { Provider } from 'react-redux';
import Store from './store/store';
// Stylesheet imported here
import './style.sass';

const store = Store();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <FormZone />
          <Girl />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
