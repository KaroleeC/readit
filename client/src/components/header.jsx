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

    this.OnSubmitHandler = this.OnSubmitHandler.bind(this);
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

  OnSubmitHandler(event) {
    let payload = {
      name: this.refs.SUB.value
    }
    console.log('click', this.refs.SUB.value);
    axios.post('/api/subs', payload).then(res => {
      console.log('POST on submit page');
    })
    .catch(err => {
      console.log('Submit page err', err);
    });

  }



  // renderRoomsList() {
  //   return ( this.state.subs.map(room =>{
  //     <li>
  //       <Link to='/${room}'>${room}</Link>
  //     </li>
  //   })

  // )}

  render() {
    return (
      <div>
        <input placeholder="Enter your new Sub page" ref="SUB" />
      <button onClick={() => {
            console.log("submit post click");
            this.OnSubmitHandler(event);
          }}> Add a new Room </button>
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
          <Route path="/:id" component={DisplayPage} />
        </div>
      </Router>
      </div>
    );
  } 
}

export default Header;
