# newsapp-react
The newsapp template rebuilt using React

## Requirements
- Node.js (via [Homebrew](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x) or [nodejs.org](https://nodejs.org/en))
- npm 6.0.0
- Grunt project scaffolding (`npm i grunt-init -g`)


## Setup
Clone this repo into it using the following command:
```
git clone git@github.com:sfchronicle/newsapp-react react
```
This will clone the repo into a folder called "react" so that we can run `grunt-init react` and not `grunt-init newsapp-react`.

If it works, you should be able to `ls ~/.grunt-init/react` and get back a list of files. That's it! Now let's start a sample project to see how it all works.

## Creating a new project
Make a new folder for your project, open a shell there and type:
```
grunt-init react
```
The scaffolding wizard will ask you to fill in some information, such as your name, the name of the project, a description... Once that's done, it'll set up some folders and source files for you, and install the NPM modules needed for this project. 

## Run project
Run `npm run dev` and navigate to `localhost:3000` in your browser.

## Modifying the settings

You can change the template dummy data to real project data by modifying the values found in the `next.config.js` in the `publicRuntimeConfig` object. These values will propagate throughout the app.

## Pulling in data

This template is pre-configured to ingest data from Airtable. By modifying the values found in the `next.config.js` in the `serverRuntimeConfig` object, you can target the desired Airtable and pull in data as a JSON file with a custom name. You may copy the example object up to 5 times in the array to pull in 5 sheets at once (any more than 5 and Airtable will start rate limiting). 

Once the data is saved in the config, pull the data with this custom command: `npm run fetch`. The JSON will appear in a folder called `data` in the root of the project.

## Deploying

You can build a static project for deploy on the projects server by running this custom command: `npm run build`. This will compile an `out` folder in the root directory that can be dragged into test-proj to demo internally or into an external folder to publish to the web. This section will be updated shortly with an enhanced deploy process.
