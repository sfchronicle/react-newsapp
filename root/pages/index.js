
// Pull in env vars
import env from '../env-vars';

// Allow Nextjs linking and dynamic pagination
import Link from 'next/link';
import Head from 'next/head';

// Components
import { PureComponent } from 'react'
import Credits from "../components/Credits";
import CreditLine from "../components/CreditLine";
import NavTop from "../components/NavTop";
import SocialTop from "../components/SocialTop";
import Post from '../components/Post';

// Enable Font Awesome! 
// The code below should enable use of anything from this list: https://fontawesome.com/icons?d=gallery&s=solid
// Using this syntax: <FontAwesomeIcon icon="close"/>
// If this is needed in  _document.js or its non-Main children, it will need to be copied there
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import freeSolids from '@fortawesome/fontawesome-free-solid';
// For optimization we should really import the individual solids we use into the library 
/* e.g. 
 * import faClose from '@fortawesome/fontawesome-free-solid/faClose'; 
 * fontawesome.library.add(faClose);
 */
// But for development flexibility, we'll import all solids
fontawesome.library.add(freeSolids);

// Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

/*** IMPORTANT! ***/
/* Be sure to prefix any links with ${publicRuntimeConfig.ASSET_PATH}
 * and any image srcs with ${publicRuntimeConfig.ASSET_PATH}${env.STATIC_URL} --
 * otherwise they will break when deployed to stage/prod */

// Import example data 
var json;
try {
	json = require('../data/example_data.json');
} catch (err) {
	// Silently fail if there's no data to load
}

/* HANDLE EVENTS */

// Example event
this.handleClick = (e) => {
	alert(`Logging a button press on ${e.currentTarget.id}!`);
}

/* END EVENTS */

// Export the Main HTML
export default class extends PureComponent {
  static async getInitialProps () {
    // Fetch list of posts to create links to pages 
    var posts = [];

    if (publicRuntimeConfig.MULTI_PAGE){
    	// You can safely erase this conditional if there are no dynamic pages in this project
    	// (Or if the dynamic pages are not required on the index page)
    	try {
				posts = require('../data/example_data.json');
				posts = posts.records;
			} catch (err) {
				// Silently fail if there's no data to load
			}
    }

		return { posts };
  }

  componentDidMount () {
  	// Don't register service worker on local dev
    if (process.env.NODE_ENV != 'development' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(`${publicRuntimeConfig.ASSET_PATH}/service-worker.js`)
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    } else {
    	// Uninstall any rogue workers
    	navigator.serviceWorker.getRegistrations().then(function(registrations) {
			 	for(let registration of registrations) {
			  	registration.unregister()
				} 
			});
    }
  }

  render () {
  	return (
  		<main>
        <Head>
        	{/* Title needs to go here (inside a Head tag) on each navigable page */}
        	<title>{ publicRuntimeConfig.PROJECT.TITLE }</title>
          <SocialTop />
          <script dangerouslySetInnerHTML={{ __html: `
          	var HDN=${publicRuntimeConfig.ANALYTICS};
            HDN.dataLayer.href.pageUrlPath = window.location.pathname;
            HDN.dataLayer.href.pageUrlPathFolders = window.location.pathname.replace(/[A-Za-z0-9-_.]+$/, '');
            HDN.dataLayer.href.pageUrlHash = window.location.hash;
            if (window.location.search){
              HDN.dataLayer.href.pageUrlQueryParams = window.location.search.replace(/^\?/, '');
            }
          `}} />
        </Head>
				<div id="project-wrapper">

					<div id="topper">
						<div className="img-wrapper">
							<img className="starter-img" src={`${publicRuntimeConfig.ASSET_PATH}${env.STATIC_URL}react.gif`} />
						</div>
					</div>

					{/* This prop will allow the nav to stick when user scrolls past */}
					<NavTop enableStick={true} /> 

					<div id="intro">
						<div id="title">
							<h1>A brave new template</h1>
							<p>Words can be like X-rays if you use them properly &mdash; they'll go through anything.</p>
							<p className="byline">By <a href="https://www.sfchronicle.com/2018/in-depth-projects/" target="_blank">the Interactive Team</a></p>
							<time className="dateline" datetime="1970-01-30T13:00:00-07:00"  itemprop="dateModified">January 30, 1970 1:00 PM</time>
						</div>
					</div>

					<div id="article">
						<p>The Savage nodded, frowning. "You got rid of them. Yes, that's just like you. Getting rid of everything unpleasant instead of learning to put up with it. Whether 'tis better in the mind to suffer the slings and arrows or outrageous fortune, or to take arms against a sea of troubles and by opposing end them... But you don't do either. Neither suffer nor oppose. You just abolish the slings and arrows. It's too easy.</p>


						{/* Example of React conditional rendering */}
						{ ("true" === "true") &&
							<p>This text was rendered based on a condition!</p>
						}

						{/* Example of React ternary rendering */}
						{ ("true" === "true") ? (
							<p>This text will render if the condition is true!</p>
						) : (
							<p>This text will render if the condition is false!</p>
						)}

						{/* Example of React loop-based rendering */}
						{ [{fruit: "apple"}, {fruit: "orange"}].map((item) => {
							console.log("Logging item!", item);
				      return <p key={item.fruit}>{item.fruit}</p>
						})}

						{/* Example of React conditional AND loop-based rendering (from data pulled by `npm run fetch`) */}
						{ (json) &&
							json.records.map((data) => {
								console.log("Logging data!", data);
					      return <p key={data.id}>{data.fields.Name}</p>
							})
						}

						{/* Basic use of events in React */}
						<div>
							<button id="example-button" onClick={(e) => this.handleClick(e)}>Press me!</button>
						</div>

						{/* Example of a Next js direct link */}
						<Link href={`${publicRuntimeConfig.ASSET_PATH}/about`}>
							<a>About this project</a>
						</Link>

						{/* Example of dynamic page creation leveraging Next js */}
						<ul>
							{	this.props.posts.length > 0 &&  
								this.props.posts.map((post) => {
				        	return <Post {...post} key={post.id} />
								})
							}
				    </ul>

					</div>

					<div id="credits">
						<h2>Credits</h2>
						<Credits type="Development">
							<CreditLine name="Lucio Villa" email="LVilla@sfchronicle.com" twitter="luciovilla" />
							<CreditLine name="Emma O'Neill" email="EONeill@sfchronicle.com" twitter="emmaruthoneill" />
							<CreditLine name="Evan Wagstaff" email="Evan.Wagstaff@sfchronicle.com" twitter="evanwagstaff" />
						</Credits>
					</div>
				</div>
			</main>
		)
	}
}