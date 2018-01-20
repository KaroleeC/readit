import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// iterate posts grab comment posts
class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.PostSubmitHandler = this.PostSubmitHandler.bind(this);
  }

  PostSubmitHandler(event) {
    const payload = {
      link: this.refs.URL.value,
      votes: 0,
      type: 0,
      pageid: this.props.pageid,
      username: this.props.user.name,
      title: this.refs.TITLE.value
    }

    axios.post('/api/posts', payload ).then(res => {
      console.log('POST on submit handler RAN!!!');
      this.props.reRender()
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
        <input id="input" placeholder="Enter your URL" ref="URL" />
        <p>title</p>
        <input id="input" placeholder="Enter your title" ref="TITLE" />
        <button onClick={() => {
            console.log("submit post click");
            this.PostSubmitHandler(event);
          }}> Submit </button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { user: state.user };
}


export default connect(mapStateToProps)(SubmitPost);
