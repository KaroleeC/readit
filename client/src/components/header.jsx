// dropdown of users liked subs
// site navigation

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './displayPage';
import Login from './login';
// id defualt set to main but change on button click
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'Main',
    };
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Main">Main</Link>
            </li>
            <li>
              <Link to="/Check">Check</Link>
            </li>
          </ul>
          <Route path="/:id" component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default Header;
