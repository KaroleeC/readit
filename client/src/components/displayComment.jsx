import React from 'react';
import axios from 'axios';
// iterate posts grab comment posts
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  render() {
    return (
      <div key={this.props.id}>
        <p>*******Comment*******</p>
        <p>USER: {this.props.username}</p>
        <button onClick={() => { this.props.upVote(this.props.votes, this.props.id, this.props.reRender)} }> up </button>
        {this.props.votes}
        <button onClick={() => { this.props.downVote(this.props.votes, this.props.id, this.props.reRender)} } > down </button>
        {this.props.title}
      </div>
    );
  }
}

export default Comments;
