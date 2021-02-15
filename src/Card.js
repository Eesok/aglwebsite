import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<div className='small-div'>
					<i className={this.props.className}></i>
					<img src={this.props.img} alt='' />
				</div>

				<div className='big-div'>
					<span className='div-title'>{this.props.title}</span>
					<br />
					<span>{this.props.description}</span>
				</div>
			</div>
		);
	}
}

export default Card;
