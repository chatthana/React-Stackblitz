import React, { Component } from 'react';

export default class FormZone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errors: {}
    }
  }

  handleTextChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('FUCKED');
  }
  
  render() {
    return (
      <section>
        <h2>Authentication & Form Controls</h2>
        <div class="alert alert-info"><strong>Note:</strong> This is an experimental form for testing an authentication mechanism</div>
        <div class="form-wrapper mt-3">
          <div className="form-group">
            <input className="form-control" type="text" name="userName" value={this.state.userName} onChange={this.handleTextChange.bind(this)} placeholder="Username" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleTextChange.bind(this)} placeholder="Password" />
          </div>
          <button onClick={this.handleSubmit.bind(this)} className="btn btn-block btn-success" type="button">Sign in</button>
          <p className="mt-5">UserName: <strong>{this.state.userName}</strong></p>
          <p>Password: <strong>{this.state.password}</strong></p>
        </div>
      </section>
    )
  }
}