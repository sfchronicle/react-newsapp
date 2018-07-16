
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
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
fontawesome.library.add(faFacebook, faTwitter, faLinkedin, faInstagram, faEnvelope);

// Bring in moment to handle dates
var moment = require('moment');

class SocialTop extends Component {

  componentWillMount () {
    // Convert date to readable time
    this.computerPubDate = moment(publicRuntimeConfig.PROJECT.DATE, "MMMM D, YYYY h:mm a").format("YYYY-MM-DDTHH:mm:ssZ");
    // Check safely for MOD_DATE
    if (typeof publicRuntimeConfig.PROJECT.MOD_DATE != "undefined"){
      this.computerModDate = moment(publicRuntimeConfig.PROJECT.MOD_DATE, "MMMM D, YYYY h:mm a").format("YYYY-MM-DDTHH:mm:ssZ");
    } else {
      // If MOD_DATE does not exist, set var to pubdate
      this.computerModDate = this.computerPubDate;
    }
  }

  render() {
    // Handle author data
    let authorObj = [];
    let newAuthor = {};
    try {
      for (let i = 0; i < this.props.authors.length; i++){
        newAuthor = {
          "@type": "Person",
          "name": this.props.authors[i].AUTHOR_NAME,
          "url": this.props.authors[i].AUTHOR_PAGE
        }
        authorObj.push(newAuthor);
      }
    } catch (err){
      // If it errored, just set to neutral default
      authorObj = {
        "@type": "Person",
        "name": "San Francisco Chronicle Staff",
        "url": "https://www.sfchronicle.com"
      }
    }

    return (
      <Fragment>
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

        {/* Schema.org structured data */}
        <script data-schema="NewsArticle" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": this.props.url
          },
          "headline": this.props.title,
          "image": {
            "@type": "ImageObject",
            "url": this.props.image
          },
          "datePublished": this.computerPubDate,
          "dateModified": this.computerModDate,
          "author": authorObj,
          "publisher": {
            "@type": "Organization",
            "name": "San Francisco Chronicle",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.sfchronicle.com/img/modules/siteheader/logos/logo_home_large.png",
              "width": 768,
              "height": 79
            }
          },
          "description": this.props.description
        }) }}>
        </script>
      </Fragment>
    );
  }
}  
// These are the defaults from next.config.js unless they are overidden using props
SocialTop.defaultProps = {
  description: publicRuntimeConfig.PROJECT.DESCRIPTION,
  paywall: publicRuntimeConfig.PAYWALL,
  image: publicRuntimeConfig.PROJECT.IMAGE,
  title: publicRuntimeConfig.PROJECT.TITLE,
  url: `${ publicRuntimeConfig.PROJECT.URL }${ publicRuntimeConfig.PROJECT.SUBFOLDER }/${ publicRuntimeConfig.PROJECT.SLUG }`,
  authors: publicRuntimeConfig.PROJECT.AUTHORS
};
export default SocialTop;

		
