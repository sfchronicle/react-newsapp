
import React, { Component, Fragment } from "react";
import Waypoint from 'react-waypoint';

// Enable Font Awesome! 
// Just add the three icons here
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
fontawesome.library.add(faFacebook, faTwitter, faLinkedin, faInstagram, faEnvelope);

// Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

class NavTop extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	    fixed: "",
	    wrapperHeight: "auto"
	  };
	}

  render() {
  	// Handy var to hold config 
  	const project = publicRuntimeConfig.PROJECT;

  	// Handle waypoint crossings
  	this.handleWaypointLeave = ({ previousPosition, currentPosition, event }) => {
    	// Stick the nav
    	if (currentPosition == "above"){
    		this.setState({
    			fixed: "fixed",
    			wrapperHeight: "30px"
    		});
    	}
		}
		this.handleWaypointEnter = ({ previousPosition, currentPosition, event }) => {
    	// Unstick the nav	
    	if (currentPosition == "inside"){
    		this.setState({
    			fixed: "",
    			wrapperHeight: "auto"
    		});
    	}
		}

		// Enable the social popup
		this.handleFacebookClick = (e) => {
			e.preventDefault();
			window.open(`https://www.facebook.com/sharer/sharer.php?u=${ project.URL }${ project.SUBFOLDER }%2F${ project.SLUG }`, 'facebook-share-dialog', 'width=626,height=436');
			return false;
		}

    return (
      <div className="header-wrapper" style={{height: this.state.wrapperHeight}}>
      	{ this.props.enableStick && 
      		<Waypoint
					  onEnter={this.handleWaypointEnter}
					  onLeave={this.handleWaypointLeave}
					/>
      	}
      	<header className={this.state.fixed}>
					<div className="navigation">

					  <a href="https://www.sfchronicle.com" target="_blank" rel="noopener">
					    <div className="logo-link link">
				        <img className="desk-logo" src="https://projects.sfchronicle.com/shared/logos/sfc_logo_black.png"></img>
				        <img className="mobile-logo" src="https://projects.sfchronicle.com/shared/logos/sfletter_c_black.png"></img>
				      </div>
					  </a>

					  <div className="link">
					    <a className="specialhead-top" href="https://www.sfchronicle.com/special-reports/">Special Report</a>
					  </div>

					  <div className="link social email">
					    <a id="mail-icon" title="Share via email" href={`mailto:?subject=${ project.TITLE }&body=${ project.DESCRIPTION }%0A%0A${ project.URL }${ project.SUBFOLDER }%2F${ project.SLUG }`}>
					      <FontAwesomeIcon icon="envelope"/>
					    </a>
					  </div>

					  <div className="link social facebook">
					    <a id="facebook-icon" title="Share on Facebook" href="#" target="_blank" rel="noopener" onClick={this.handleFacebookClick}>
					      <FontAwesomeIcon icon={["fab", "facebook"]}/>
					    </a>
					  </div>

					  <div className="link social twitter">
					    <a target="_blank" rel="noopener" id="twitter-icon" title="Share on Twitter" href={`https://twitter.com/intent/tweet?url=${ project.URL }${ project.SUBFOLDER }%2F${ project.SLUG }&text=${ project.TWITTER_TEXT }&hashtags=${ project.TWITTER_HASHTAGS }`}>
					      <FontAwesomeIcon icon={["fab", "twitter"]}/>
					    </a>
					  </div>

					</div>
				</header>

      </div>
    );
  }
}
// Disable the sticky nav by default
NavTop.defaultProps = {
  enableStick: false
};
export default NavTop;

		
