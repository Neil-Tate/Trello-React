import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveEmailUrl } from '../../actions/user.action';


// Import Css for it
import '../loginStyle.css';
import trello from '../../trello-images/blue-trello.svg';
import blueAtla from '../../trello-images/atlassian-logo-blue-small.svg';
import leftBk from '../../trello-images/left-bk.svg';
import rightBk from '../../trello-images/right-bk.svg';

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.onNextPage = this.onNextPage.bind(this);

		this.state = {
			urlEmail: '',
			email: ''
		}
	}

	componentDidMount() {
		const attr = document.createAttribute("disabled");
		document.getElementById('signup').setAttributeNode(attr);
	}

	onChange(e) {
		const signElem = document.getElementById('signup');
		const attr = signElem.getAttributeNode("disabled");
		const regex = /@+/i;
		if (regex.test(e.target.value)) {
			for (let i = 0; i < signElem.attributes.length; i++) {
				if (signElem.attributes[i].name == "disabled") {
					signElem.removeAttributeNode(attr);
				}
			}
		} else {
			for (let i = 0; i <= signElem.attributes.length; i++) {
				if (signElem.attributes[i].name === "disabled") {
					return false;
				} else {
					signElem.setAttributeNode(document.createAttribute("disabled"));
				}
			}
		}

		
		this.setState({
			urlEmail: e.target.value.replace('@', '%40'),
			email: e.target.value
		});

	}

	onNextPage() {
		// this.props.history.push('/signup/'+this.state.email);
		// e.preventDefault();
		this.props.saveEmailUrl(this.state.email);
		this.props.history.push("/signupemail"+this.state.urlEmail);
	}

	render() {
		return (
			<div className="login-body">
				<div style={{'zIndex': 1}}>
					<img className="logo" src={trello} alt="trello mark" />
					<div className="inner-section">
						<div className="section-wrapper">
							<div id="signup-form" className="layout-twothirds-center account-form">
								<div id="unsupported-error" className="hidden error-message"> 
						           	<p>We're happy you're signing up for Trello!</p>
						           	<p>Before you get started, you'll need to <a href="/platforms">switch to a supported browser</a>.</p>
								</div>
								<div id="error" className="hidden quick-switch">
									<p className="error-message"></p>
								</div>
								
								<div id="signup-password" className="quick-switch">
									<div id="signup-prompt" className="info-message hidden">
										<div>You need to sign up for Trello with Atlassian. That means everything in your new Trello account belongs to your organization, so be mindful of personal content.</div>
										<span className="atlassian-link">Sign up with Atlassian</span>
									</div>
									<div id="login-prompt" className="info-message hidden">
										<div>Hey, that email is already in use by another Atlassian account. You'll need to login with Atlassian to use Trello.</div>
										<span className="atlassian-link">Log in with Atlassian</span>
									</div>
									<h1>Sign up to Trello</h1>
									{/*Email and Password*/}
									<div className="sign-up-container">
										
										{/*Sign up email input*/}
										<input onChange={this.onChange} type="email" name="email" id="user" className="form-field" autocorrect="off" spellcheck="false" autocapitalize="off" autofocus="autofocus" placeholder="Enter email" />
										
										<div id="email-error" className="hidden error-message"></div>
										<p className="quiet tos">
											By signing up, you confirm that you've read and accepted our
											<a href="/legal" target="_blank" data-analytics-event="clickedSignUpTOSLink">Terms of Service</a>
											 and 
											<a href="/privacy" target="_blank" data-analytics-event="clickedSignUpPrivacyLink">Privacy Policy</a>. 
										</p>
										<div id="signup-enterprise-confirmation" className="hidden">
											<label> <input type="checkbox" /> </label>
										</div>

										{/*robot check part*/}
										
										{/*Continue button*/}
										<input onClick={this.onNextPage} id="signup" tabindex="0" type="button" className="button account-button button-green" value="Continue"/>
										

										<form id="signup-redirect" action="/signup_redirect" method="post">
											<input type="hidden" name="email" id="signup-redirect-email" />
											<input type="hidden" name="locale" id="signup-redirect-locale" value="" />
										</form>
										{/*signUp Google*/}
										<form id="signup-google" action="/authenticate_openid" method="post">
											<div className="login-method-separator">OR</div>
												<input type="hidden" name="openid_identifier" value="https://www.google.com/accounts/o8/id" />
												<input type="hidden" name="provider" value="google" />
												<input type="hidden" name="tosAccepted" id="google-tos-accepted" value="true" /> 
												<input type="hidden" name="locale" id="signup-google-locale" value="" />
												<div id="google" className="google-button" tabindex="0">
													<span className="icon"></span>
													<span className="label" data-analytics-event="clickedSignUpWithGmailButton">Continue with Google</span>
											</div>
										</form>

										{/*signUp atlassian*/}
										<form id="signup-atlassian" action="/authenticate_openid" method="post">
											<input type="hidden" name="openid_identifier" value="https://id.atlassian.com/openid/v2/op" />
											<input type="hidden" name="provider" value="atlassian" />
											<input type="hidden" name="tosAccepted" id="atlassian-tos-accepted" value="true" />
											<input type="hidden" name="locale" id="signup-atlassian-locale" value="" />
											<input type="hidden" name="user" id="signup-atlassian-user" value="" />
										</form>
									</div>
								</div>
								<hr/>
								<span className="bottom-form-link">
									<a href="/login" data-analytics-event="clickedSignUpLoginLink">Already have an account? Log In</a>
								</span>
							</div>
							<div id="confirm-tos-container" className="layout-twothirds-center hidden">
								<h1>Create a Trello Account</h1>
								<p> By signing up you agree to the <a href="/legal" target="_blank" data-analytics-event="clickedSignUpTOSLink">Terms of Service</a> and <a href="/privacy" target="_blank" data-analytics-event="clickedSignUpPrivacyLink">Privacy Policy</a>. </p>
								<input id="confirm-tos" tabindex="0" type="button" className="button button-green" value="I accept the Terms of Service and Privacy Policy" />
							</div>
						</div>
					</div>
				</div>
				{/*Footer*/}
				<div className="global-footer">
					<div className="language-picker-container">
						<select name="language-picker" id="language-picker" data-analytics-event="clickedFooterLanguageSelectMenu">
							<option value="choose-one" id="choose" disabled="true">Select your language…</option>
							<option value="cs" data-url="https://trello.com/cs" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Čeština">Čeština</option>
							<option value="de" data-url="https://trello.com/de" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Deutsch">Deutsch</option>
							<option value="en" data-url="https://trello.com/en" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English">English</option>
							<option value="en-AU" data-url="https://trello.com/en-AU" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (AU)">English (AU)</option>
							<option value="en-GB" data-url="https://trello.com/en-GB" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (UK)">English (UK)</option>
							<option value="en-US" data-url="https://trello.com/en-US" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (US)" selected>English (US)</option>
							<option value="es" data-url="https://trello.com/es" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Español">Español</option>
							<option value="fr" data-url="https://trello.com/fr" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Français">Français</option>
							<option value="it" data-url="https://trello.com/it" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Italiano">Italiano</option>
							<option value="hu" data-url="https://trello.com/hu" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Magyar">Magyar</option>
							<option value="nl" data-url="https://trello.com/nl" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Nederlands">Nederlands</option>
							<option value="nb" data-url="https://trello.com/nb" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Norsk (bokmål)">Norsk (bokmål)</option>
							<option value="pl" data-url="https://trello.com/pl" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Polski">Polski</option>
							<option value="pt-BR" data-url="https://trello.com/pt-BR" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Português (Brasil)">Português (Brasil)</option>
							<option value="fi" data-url="https://trello.com/fi" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Suomi">Suomi</option>
							<option value="sv" data-url="https://trello.com/sv" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Svenska">Svenska</option>
							<option value="vi" data-url="https://trello.com/vi" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Tiếng Việt">Tiếng Việt</option>
							<option value="tr" data-url="https://trello.com/tr" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Türkçe">Türkçe</option>
							<option value="ru" data-url="https://trello.com/ru" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Русский">Русский</option>
							<option value="uk" data-url="https://trello.com/uk" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Українська">Українська</option>
							<option value="th" data-url="https://trello.com/th" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="ภาษาไทย">ภาษาไทย</option>
							<option value="zh-Hans" data-url="https://trello.com/zh-Hans" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="中文 (简体)">中文 (简体)</option>
							<option value="zh-Hant" data-url="https://trello.com/zh-Hant" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="中文 (繁體)">中文 (繁體)</option>
							<option value="ja" data-url="https://trello.com/ja" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="日本語">日本語</option>
						</select>
						<div>
							<span className="dropdown-icon"></span>
						</div>
					</div>
					<div>
						<hr />
						<img className="atlassian-logo-small" src={blueAtla} alt="blueAtla" width={150} />
					</div>
					<ul className="global-footer-list sm-div">
						<li className="global-footer-list-item">
							<a>Templates</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Pricing</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Apps</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Jobs</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Blog</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Developers</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>About</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Help</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Cookie Settings</a>
						</li>&nbsp;
					</ul>
				</div>
				{/*Background*/}
				<div className="background display-div">
					<div className="leftBk">
						<img src={leftBk} alt="leftBk" />
					</div>
					<div className="rightBk">
						<img src={rightBk} alt="rightBk" />
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveEmailUrl
  }, dispatch);
}

export default connect(null, mapDispatchToProps )(SignUp);