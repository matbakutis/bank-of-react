import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import AccountBalance from './components/AccountBalance';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {

	constructor() {
		super();

		this.state = {
			loggedIn: false,
			accountBalance: 14568.27,
			currentUser: {
				userName: 'bob_loblaw',
				memberSince: '08/23/99',
			},
			debits: [],
			credits: []
		}
	}

	mockLogIn = (logInInfo) => {
		this.getCredits();
		this.getDebits();
		const newUser = { ...this.state.currentUser }
		newUser.userName = logInInfo.userName
		this.setState({ currentUser: newUser, loggedIn: true })
	}

	getCredits = () => {
		fetch('http://localhost:4000/credits/')
			.then((response)=>(response.json()))
			.then((response)=>{
				const state = this.state;
				state.credits = response;
				this.setState(state);
			});
	}

	getDebits = () => {
		fetch('http://localhost:4000/debits/')
			.then((response)=>(response.json()))
			.then((response)=>{
				const state = this.state;
				state.debits = response;
				this.setState(state);
			});
	}

	render() {

		const HomeComponent = () => (<Home loggedIn={this.state.loggedIn} />);
		const UserProfileComponent = () => (<UserProfile loggedIn={this.state.loggedIn} userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />);
		const LogInComponent = () => (<LogIn loggedIn={this.state.loggedIn} user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)
		const DebitsComponent = () => (<Debits loggedIn={this.state.loggedIn} debits={this.state.debits} />);
		const CreditsComponent = () => (<Credits loggedIn={this.state.loggedIn} credits={this.state.credits} />);
		
		return (
			<Router>
				<div>
					<Route exact path="/" render={HomeComponent} />
					<Route exact path="/userProfile" render={UserProfileComponent} />
					<Route exact path="/login" render={LogInComponent} />
					<Route exact path="/debits" render={DebitsComponent} />
					<Route exact path="/credits" render={CreditsComponent} />
					{ this.state.loggedIn ? <AccountBalance accountBalance={this.state.accountBalance}/> : null }
				</div>
			</Router>
		);
	}

}

export default App;