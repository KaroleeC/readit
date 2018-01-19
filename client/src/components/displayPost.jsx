import React from 'react';
import axios from 'axios';
import Comments from './displayComment';
import SubmitComment from './submitComment';
// display posts by passed down subpage tag
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  componentDidMount() {
    console.log('post com mount ', this.props.id);
    axios
      .get(`/api/comments?postid=${this.props.id}`)
      .then(res => {
        this.setState({ comments: res.data });
        console.log('STATE IN POST', this.state.comments);
      })
      .catch(err => {
        console.log('DisplayPost get', err);
      });
  }

  render() {
    return (
      <div key={this.props.id}>
        <p>***POST***</p>
        <button> up </button>
        {this.props.votes}
        <button> down </button>
        <p>User Name</p>
        {this.props.title}
        {this.props.link}
        {this.state.comments.map(comment => (
          <Comments
            id={comment.id}
            votes={comment.votes}
            title={comment.title}
          />
        ))}
        <SubmitComment />
      </div>
    );
  }
}

export default Posts;
