# newsapp-react
The newsapp template rebuilt using React


## What's cool about this template

- Next JS's \<Link\> components preserve common components and resources so internal links load up very quickly
- React's Component-based approach encourages reuse of common UI elements to build pages more efficiently
- Manipulating React's [Virtual DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/) is faster than traditional methods and results in a smoother experience for the reader
- React makes it easy to register a service worker and turn our projects into [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
- Should we want to turn any project into a full-fledged iOS or Android app, [React Native](https://facebook.github.io/react-native/) makes that possible
- Next JS's declarative page structure means dropping hello.js into the `pages` folder creates the /hello/ path
- Next JS supports dynamic page creation from a local or remote data source
- Dynamic files in development (simpler for our developers), static files when built (faster for our readers)
- Utilizes a Progressive Web App enhancements like service workers (speeds up loading) and manifest data (icons and theme colors)
- One-line deploys to stage and production


## Requirements
- Node.js (via [Homebrew](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x) or [nodejs.org](https://nodejs.org/en)) LTS version recommended (8.11.1) -- older versions may cause failure during new project init
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
The scaffolding wizard will ask you to fill in some information, such as your name, the name of the project, a description. You can press 'Enter' to accept the defaults. The MULTI_PAGE option will configure settings to allow you to generate pages dynamically from data -- decline this option unless that's a requirement for your project. You can always update the public-config.json if your needs for this functionality change.

Once that's done, it'll set up some folders and source files for you, and install the NPM modules needed for this project. 


## Run project
Run `npm run dev` and navigate to `localhost:3000` in your browser.


## Modifying the settings

You can change the template dummy data to real project data by modifying the values found in `public-config.json` and `private-config.json`. These values will propagate throughout the app. 

You may also store arbitrary data in `public-config.json` as long as the required original keys remain in place.


## Pulling in data

This template is pre-configured to ingest data from Airtable. By modifying the values found in `private-config.json`, you can target the desired Airtable and pull in data as a JSON file with a custom name. You may copy the example object up to 5 times in the array to pull in 5 sheets at once (any more than 5 and Airtable will start rate limiting). 

Once the data is saved in the config, pull the data with this custom command: `npm run fetch`. The JSON will appear in a folder called `data` in the root of the project.


## Deploying

It's very important to first configure `public-config.json` with the right `subfolder` and `slug` values -- these will be used by the deploy script when the static files are sent to the server. These variables also determine the destination for relative links and static assets.

One-liner to deploy code to our `test-proj` folder for internal testing: `npm run build:stage`

One-liner to deploy code to our your chosen subfolder for live publishing: `npm run build:prod`

## Notes about developing on this template

- When using /<Link/> tags for internal links, it's usually a good idea to add the `prefetch` attr -- this will allow the app to preload data from the link source and speed up transitions
- When linking out to external sources with the `target=_blank` attr, it's good to add the `rel=noopener` attr so that the source will be disconnected from the project page
- When adding a link href or img src, remember to use the `${publicRuntimeConfig.ASSET_PATH}` and `${publicRuntimeConfig.ASSET_PATH}${env.STATIC_URL}` prefixes (respectively) -- otherwise, these resources will not be available when deploying

