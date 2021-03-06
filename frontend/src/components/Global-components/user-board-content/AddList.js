import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';


// Import css for it
import '../GloCss.css';

export default class AddList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div onClick={this.props.onClick}  className="list-body">
				<MDBIcon className="plus-icon" icon="plus"  />
				<span>{this.props.title}</span>
			</div>
		);
	}
}