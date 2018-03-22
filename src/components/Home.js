import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>
          { this.props.loggedIn ?  <Link to="/userProfile">User Profile<br/></Link> : null }
          { !this.props.loggedIn ? <Link to="/login">Log In</Link> : null }
          { this.props.loggedIn ? <Link to="/credits">Credits<br/></Link> : null }
          { this.props.loggedIn ? <Link to="/debits">Debits<br/></Link> : null }
        </div>
    );
  }
}

export default Home;