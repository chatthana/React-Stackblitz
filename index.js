import React, { Component } from 'react';
import { render } from 'react-dom';
import Girl from './Girl';
import FormZone from './FormZone';
import NotFound from './NotFound';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './store/store';
// Stylesheet imported here
import './style.sass';

const store = Store();

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Girl} />
        <Route exact path="/signin" component={FormZone} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

render(
<Router>
  <Provider store={store}>
    <App />
  </Provider>
</Router>, document.getElementById('root'));
