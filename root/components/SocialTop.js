
import React, { Component, Fragment } from "react";

// Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

// Enable Font Awesome! 
// Just add the three icons here
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
fontawesome.library.add(faFacebook, faTwitter, faEnvelope);

class SocialTop extends Component {
  render() {
    return (
      <Fragment>
      	<title>{ this.props.title }</title>
      	<meta name="description" content={ this.props.description } />
      	<meta name="__sync_contentCategory" content={ this.props.paywall } />
        <link rel="shortcut icon" href="https://www.sfchronicle.com/favicon.ico" type="image/x-icon" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={ this.props.title } />
				<meta name="twitter:site" content="@sfchronicle" />
				<meta name="twitter:url" content={ this.props.url } />
				<meta name="twitter:image" content={ this.props.image } />
				<meta name="twitter:description" content={ this.props.description } />

				<meta property="og:type" content="article" />
				<meta property="og:title" content={ this.props.title } />
				<meta property="og:site_name" content="The San Francisco Chronicle" />
				<meta property="og:url" content={ this.props.url } />
				<meta property="og:image" content={ this.props.image } />
				<meta property="og:description" content={ this.props.description } />
      </Fragment>
    );
  }
}  
// These are the defaults from next.config.js unless they are overidden using props
SocialTop.defaultProps = {
  title: publicRuntimeConfig.PROJECT.TITLE,
  description: publicRuntimeConfig.PROJECT.DESCRIPTION,
  paywall: publicRuntimeConfig.PAYWALL,
  image: `${ publicRuntimeConfig.PROJECT.URL }${ publicRuntimeConfig.PROJECT.SLUG }${ publicRuntimeConfig.PROJECT.IMAGE }`,
  url: `${ publicRuntimeConfig.PROJECT.URL }${ publicRuntimeConfig.PROJECT.SLUG }`
};
export default SocialTop;

		
