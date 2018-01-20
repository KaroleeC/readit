import React from 'react';
import axios from 'axios';
import Comments from './displayComment';
import SubmitComment from './submitComment';
import { connect } from 'react-redux';
// display posts by passed down subpage tag
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };

    this.VoteClickHandler = this.VoteClickHandler.bind(this);
    this.DownVoteClickHandler = this.DownVoteClickHandler.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/comments?postid=${this.props.id}`)
      .then(res => {
        this.setState({ comments: res.data });
        console.log('comments ', this.state.comments)
      })
      .catch(err => {
        console.log('DisplayPost get', err);
      });
  }

  VoteClickHandler(votes, postid, renderFunc) {
    // pass in this.props.id
    // take current value of votes and do a put request to increase by one
    console.log('post com mount ', votes);
    const newvote =votes+1
    let payload = {
      id: postid,
      votes: newvote
    };
    axios
      .put('/api/posts', payload)
      .then(res => {
        console.log('PUT Ran in upclick handler');
        renderFunc()
      })
      .catch(err => {
        console.log('Up click err', err);
      });
      
  }

  DownVoteClickHandler(votes, postid, renderFunc) {
    // pass in this.props.id
    // take current value of votes and do a put request to increase by one
    console.log('post com mount ', votes);
    const newvote = votes-1
    let payload = {
      id: postid,
      votes: newvote
    };
    axios
      .put('/api/posts', payload)
      .then(res => {
        console.log('PUT Ran in upclick handler');
        renderFunc()
      })
      .catch(err => {
        console.log('Up click err', err);
      });
  }

  render() {
    return (
      <div key={this.props.id}>
        <h2><a href={this.props.link} target="_blank">{this.props.title}</a></h2>
        <button onClick={() => { this.VoteClickHandler(this.props.votes, this.props.id, this.props.reRender) } }> up </button>
        {this.props.votes}
        <button onClick={() => { this.DownVoteClickHandler(this.props.votes, this.props.id, this.props.reRender) } } > down </button>
         <p> Posted by: {this.props.username}</p>
        {this.state.comments.map(comment => (
          <div key={comment.id}>
            <Comments
              id={comment.id}
              username={comment.username}
              votes={comment.votes}
              title={comment.title}
              downVote={this.DownVoteClickHandler}
              upVote={this.VoteClickHandler}
              reRender={this.componentDidMount.bind(this)}
            />
          </div>
        ))}
        <SubmitComment 
        postid={this.props.id}
        reRender={this.componentDidMount}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Posts);

//export default Posts;
