import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUser } from '../reduxActions/changeUser';
// changes a global state of username
class Login extends React.Component {
  constructor(props) {
    super(props);
    {
    }
  }

  render() {
    return (
      <div className="col-sm">
        <p>Begin Browsing or Login to Join the conversation</p>
        <input placeholder="username" ref="userText"/>
        <button
          onClick={() => {
            console.log("click", this.refs.userText.value);
            this.props.changeUser(this.refs.userText.value);
            console.log(this.props.user.name);
          }}
        >Login</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

// connect action creater to component/state
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeUser: changeUser
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
