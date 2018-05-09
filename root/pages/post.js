
/* This page is different from the others! It's dynamically rendered */

import { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Get component list
import SocialTop from "../components/SocialTop";
import NavTop from "../components/NavTop";

// Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

export default class extends Component {
  static async getInitialProps ({ query }) {
    // Fetch single post detail
    var posts;
    try {
    	// Try pulling in the data from the file
    	// NOTE: Nextjs also supports creating static pages by async query (WHAT!?)
    	// Just follow the example here if that is desired: https://github.com/zeit/next.js/tree/canary/examples/with-static-export
			posts = require('../data/example_data.json');
			posts = posts.records;
			// Get post that matches the passed ID
			const thisPost = posts.find(x => x.id === query.id);
			return { thisPost };
		} catch (err) {
			console.log("Example data failed to load! Did you run `npm run fetch`?");
		}
  }

  render () {
  	const fields = this.props.thisPost.fields;
    return (
      <main>
        <Head>
        	{/* Any of the social props can be customized like this: */}
          <SocialTop title={fields.Name} description={fields.Notes} />
        </Head>

        <div id="project-wrapper">

	        <NavTop /> 

	        <h1>{fields.Name}</h1>

	        <p>{fields.Notes}</p>

	        <Link href={`${publicRuntimeConfig.ASSET_PATH}/`}>
	          <a>Go back to home</a>
	        </Link>

	      </div>
      </main>
    )
  }
}