import React from 'react';
import axios from 'axios';
// iterate posts grab comment posts
class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Submit a new Post</p>
        <p>URL</p>
        <input  placeholder="Enter your URL"/>
        <p>title</p>
        <input  placeholder="Enter your title"/>
        <button> Submit </button>
      </div>
    );
  }
}

export default SubmitPost;
