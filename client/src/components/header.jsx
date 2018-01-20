import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DisplayPage from './displayPage';
import Login from './login';
// id defualt set to main but change on button click
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'Main',
      subs: [],
    };
  }

  componentWillMount() {
    // axios request to get pages
    axios
      .get('/api/subs')
      .then(res => {
        this.setState({ subs: res.data });
        console.log('Header STATE', this.state.subs )
      })
      .catch(err => {
        console.log('Get Subs err', err);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/${sub}'>Main</Link>
            </li>
            <li>
              <Link to="/Main">Main</Link>
            </li>
            <li>
              <Link to="/Check">Check</Link>
            </li>
          </ul>
          <Route path="/:id" component={DisplayPage} />
        </div>
      </Router>
    );
  }
}

export default Header;
