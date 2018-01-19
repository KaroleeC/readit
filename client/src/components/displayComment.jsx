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
        <p>***Comment***</p>
        <button> up </button>
        {this.props.votes}
        <button> down </button>
        <p> this should also have the user name</p>
        {this.props.title}
      </div>
    );
  }
}

export default Comments;
