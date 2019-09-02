import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as girlActions from './store/actions/girl';

const { fetchGirls } = girlActions;

class Girl extends Component {

  componentDidMount() {
    this.props.fetchGirls();
  }

  render() {
    return (
      <>
        <ul>
        {this.props.girls.length && this.props.girls.map(girl => (
          <li>{girl.name}</li>
        ))}
        </ul>
      </>
    );
  }
}

export default connect(state => ({
  girls: state.girl.list
}), {
  fetchGirls
})(Girl);
