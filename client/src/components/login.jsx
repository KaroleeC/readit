import React from 'react';
// changes a global state of username
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-sm">
        <p>Want to join? login or sign up in seconds</p>
        <input value="username" />
        <input value="password" />
        <button> Login </button>
      </div>
    );
  }
}

export default Login;
