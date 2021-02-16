import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Card from './Card';
import ContactContainer from './ContactContainer';
class App extends Component {
	render() {
		return (
			<div id='body'>
				<Header />
				<div class='topnav'>
					<a href='#'>Link</a>
					<a href='#'>Link</a>
					<a href='#'>Link</a>
				</div>
				<Card
					className='section'
					img='#'
					title='About Us'
					description='
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.l'
				/>
				<ContactContainer />
			</div>
		);
	}
}

export default App;
