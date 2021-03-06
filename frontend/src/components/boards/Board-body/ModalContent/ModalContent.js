import React, { Component } from "react";
import { MDBIcon } from 'mdbreact';


// Import css for it
import './Modal.css';


export default class ModalContent extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);

		this.state = {
			value: '',
			isavailable: false
		}
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		});
		if (e.target.value !== '') {
			
		}
	}

	render() {
		return (
			<>
				<div className="create-board-modal-header">
					<div className="create-board-title">
						<button onClick={this.props.toggle} className="close-btn">
							<MDBIcon icon="times" />
						</button>
						<input
						value={this.target.value}
						onChange={this.onChange}
						type="text"
						placeholder="Add board title"
						/>
						<div>
							<button className="select-btn">
								<span>No team</span>
								<MDBIcon className="icon-sm" icon="angle-down" />
							</button>
							<button className="select-btn">
								<MDBIcon className="icon-sm" icon="lock" />
								<span>Private</span>
								<MDBIcon className="icon-sm" icon="angle-down" />
							</button>
						</div>
					</div>	
					<ul className="theme-area">
						<li className="background-grid-item">
							<button className="theme-btn">
								<MDBIcon className="check-icon" icon="check" />
							</button>
						</li>
						<li className="background-grid-item">
							<button className="theme-btn">
								<MDBIcon className="check-icon" icon="check" />
							</button>
						</li>
						<li className="background-grid-item">
							<button className="theme-btn">
								<MDBIcon className="check-icon" icon="check" />
							</button>
						</li>
						<li className="background-grid-item">
							<button className="theme-btn">
								<MDBIcon className="check-icon" icon="check" />
							</button>
						</li>
						<li className="background-grid-item">
							<button className="theme-btn">
								<MDBIcon className="check-icon" icon="check" />
							</button>
						</li>
						<li className="background-grid-item">
							<button className="theme-btn">
								<MDBIcon className="check-icon" icon="check" />
							</button>
						</li>
						<li className="background-grid-item">
							<button className="theme-btn">
								<MDBIcon className="check-icon" icon="check" />
							</button>
						</li>
						<li className="background-grid-item">
							<button className="theme-btn">
								<MDBIcon className="check-icon" icon="check" />
							</button>
						</li>
					</ul>
				</div>
			</>
		);
	}
}