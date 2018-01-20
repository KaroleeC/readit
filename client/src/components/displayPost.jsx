import React from 'react';
import axios from 'axios';
import Comments from './displayComment';
import SubmitComment from './submitComment';
// display posts by passed down subpage tag
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };

    this.VoteClickHandler = this.VoteClickHandler.bind(this);
    this.DownVoteClickHandler = this.DownVoteClickHandler.bind(this);
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
    const newvote =votes-1
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
        <p>***POST***</p>
        <button onClick={() => { 
          this.VoteClickHandler(this.props.votes, this.props.id, this.props.reRender) } }> up </button>
        {this.props.votes}
        <button onClick={() => { 
          this.DownVoteClickHandler(this.props.votes, this.props.id, this.props.reRender) } } > down </button>
        <p>User Name</p>
        {this.props.title}
        {this.props.link}
        {this.state.comments.map(comment => (
          <Comments
            id={comment.id}
            votes={comment.votes}
            title={comment.title}
            downVote={this.DownVoteClickHandler}
            upVote={this.VoteClickHandler}
            reRender={this.componentDidMount.bind(this)}
          />
        ))}
        <SubmitComment 
        postid={this.props.id}
        />
      </div>
    );
  }
}

export default Posts;
