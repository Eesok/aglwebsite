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
				<Card />
				<ContactContainer />
				<p>Appraisal Gem Lab</p>
				<img src='https://imgur.com/HrKKVOu.jpg' alt='logo' />
			</div>
		);
	}
}

export default App;
