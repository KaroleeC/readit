import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// iterate posts grab comment posts
class SubmitComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.OnSubmitHandler = this.OnSubmitHandler.bind(this);
  }

  OnSubmitHandler(event) {
    const payload = {
      votes: 0,
      type: 1,
      postid: this.props.postid,
      userid: this.props.user.name,
      title: this.refs.TEXT.value
    }

    axios.post('/api/posts', payload ).then(res => {
      console.log('POST on submit handler');
    })
    .catch(err => {
      console.log('Submit post err', err);
    });

  }

  render() {
    return (
      <div>
        <p> Submit a new comment</p>
        <input placeholder="Enter your comment HERE" ref="TEXT" />
        <button onClick={() => {
        this.OnSubmitHandler(event);
      }}> Submit </button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps )(SubmitComment);
