import React from 'react';
import axios from 'axios';
// iterate posts grab comment posts
class SubmitComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Comment</p>
        <input placeholder="Enter your comment HERE" />
      </div>
    );
  }
}

export default SubmitComment;
