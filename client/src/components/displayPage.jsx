import React from 'react';
import axios from 'axios';
import Posts from './displayPost';
import SubmitPost from './submitPost';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    console.log('yooooo', this.props.match.params.id);
    axios
      .get(`/api/posts?pageid=${this.props.match.params.id}`)
      .then(res => {
        this.setState({ posts: res.data }, () => {
          console.log(this.state.posts);
        });
      })
      .catch(err => {
        console.log('Displaypage get', err);
      });
  }

  render() {
    return (
      <div>
        <h3>ID: {this.props.match.params.id}</h3>
        <SubmitPost pageid={this.props.match.params.id} />
        {this.state.posts.map(post => (
          <Posts
            id={post.id}
            votes={post.votes}
            title={post.title}
            link={post.link}
          />
        ))}
      </div>
    );
  }
}

export default MainPage;
