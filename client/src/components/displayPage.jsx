import React from 'react';
import axios from 'axios';
import Posts from './displayPost';
import SubmitPost from './submitPost';

class DisplayPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
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
        <SubmitPost 
          pageid={this.props.match.params.id}
          reRender={this.componentDidMount}
        />
        {this.state.posts.map(post => (
          <div key={post.id}>
            <Posts
              username={post.username}
              id={post.id}
              votes={post.votes}
              title={post.title}
              link={post.link}
              reRender={this.componentDidMount.bind(this)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayPage;
