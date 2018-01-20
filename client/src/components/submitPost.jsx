import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// iterate posts grab comment posts
class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.OnSubmitHandler = this.OnSubmitHandler.bind(this);
  }

  OnSubmitHandler(event) {
    const payload = {
      link: this.refs.URL.value,
      votes: 0,
      type: 0,
      pageid: this.props.pageid,
      userid: this.props.user.name,
      title: this.refs.TITLE.value
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
        <p>Submit a new Post</p>
        <p>URL</p>
        <input placeholder="Enter your URL" ref="URL" />
        <p>title</p>
        <input placeholder="Enter your title" ref="TITLE" />
        <button onClick={() => {
            console.log("submit post click");
            this.OnSubmitHandler(event);
          }}> Submit </button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { user: state.user };
}


export default connect(mapStateToProps)(SubmitPost);
