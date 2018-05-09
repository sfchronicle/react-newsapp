# newsapp-react
The newsapp template rebuilt using React

## Setup

This template assumes you have Node and NPM installed globally. If not, [follow these instructions](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x). Some people hate on the Homebrew install, but it works fine. If you hate it too, here's the manual install link: https://nodejs.org/en/

NOTE: If you have an older version of node, the `npm i` step below might fail. You can upgrade your node version to the LTS version using the methods above. As of this writing, the working LTS version was 8.11.1. Recommended npm version is 6.0.0, (`npm i npm -g`) but you may not see errors with older versions.

1. In your terminal, access your code directory (`cd ~/git`). 
1. Clone this directory in that folder using `git clone git@github.com:sfchronicle/newsapp-react.git`.
1. Install the dependencies with `npm i`. 
1. Make sure the demo project runs by entering `npm run dev` and navigating to`localhost:3000` in your browser.

## Modifying the settings

You can change the template dummy data to real project data by modifying the values found in the `next.config.js` in the `publicRuntimeConfig` object. These values will propagate throughout the app.

## Pulling in data

This template is pre-configured to ingest data from Airtable. By modifying the values found in the `next.config.js` in the `serverRuntimeConfig` object, you can target the desired Airtable and pull in data as a JSON file with a custom name. You may copy the example object up to 5 times in the array to pull in 5 sheets at once (any more than 5 and Airtable will start rate limiting). 

Once the data is saved in the config, pull the data with this custom command: `npm run fetch`. The JSON will appear in a folder called `data` in the root of the project.

## Deploying

You can build a static project for deploy on the projects server by running this custom command: `npm run build`. This will compile an `out` folder in the root directory that can be dragged into test-proj to demo internally or into an external folder to publish to the web. This section will be updated shortly with an enhanced deploy process.
