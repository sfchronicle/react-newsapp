// next.config.js
const withLess = require('@zeit/next-less');
const _ = require('lodash');

// Modify these JSON files directly to update the project
const privateConfig = require("./private-config");
const publicConfig = require("./public-config");

const privateSettings = privateConfig;
const publicSettings = publicConfig;

const projectSettings = publicSettings.PROJECT;
var HDN = HDN || {};
HDN.dataLayer = HDN.dataLayer || {};

// HDN.dataLayer object for content and href data
HDN.dataLayer.content = HDN.dataLayer.content || {};
HDN.dataLayer.href = HDN.dataLayer.href || {};
HDN.dataLayer.content.title = `${projectSettings.TITLE}`;
HDN.dataLayer.content.subtitle = "";
HDN.dataLayer.content.objectId = "";
HDN.dataLayer.content.objectType = "channel";
HDN.dataLayer.content.sectionPath = [`${projectSettings.HEARST_CATEGORY}`, 'special projects'];
HDN.dataLayer.content.pubDate = `${projectSettings.DATE} 00:00:00`;
HDN.dataLayer.content.wordCount = "";
HDN.dataLayer.content.keywords = [];
HDN.dataLayer.content.keySubjects = [];
HDN.dataLayer.content.keyPersons = [];
HDN.dataLayer.content.keyOrganizations = [];
HDN.dataLayer.content.keyConcepts = [];
HDN.dataLayer.content.keyCategories = [];
HDN.dataLayer.content.keyPlaces = [];
HDN.dataLayer.content.keyNlpPerson = [];
HDN.dataLayer.content.keyNlpLocation = [];
HDN.dataLayer.content.keyNlpOrganization = [];
HDN.dataLayer.content.keyNlpEvent = [];
HDN.dataLayer.content.keyNlpWorkOfArt = [];
HDN.dataLayer.content.keyNlpConsumerGood = [];
HDN.dataLayer.content.keyNlpOther = [];
HDN.dataLayer.content.keyNlpUnknown = [];

// HDN.dataLayer object for source information
HDN.dataLayer.source = HDN.dataLayer.source || {};
HDN.dataLayer.source.authorName = `${projectSettings.AUTHOR}`;
HDN.dataLayer.source.authorTitle = "San Francisco Chronicle Staff";
HDN.dataLayer.source.originalSourceSite = "SF";
HDN.dataLayer.source.publishingSite = "premiumsfgate";
HDN.dataLayer.source.sourceSite = "sfgate";

// HDN.dataLayer object for sharing information
HDN.dataLayer.sharing = HDN.dataLayer.sharing || {};
HDN.dataLayer.sharing.openGraphUrl = `${projectSettings.URL}${projectSettings.SLUG}`;
HDN.dataLayer.sharing.openGraphType = "article";

HDN.dataLayer.href.pageUrl = `${projectSettings.URL}${projectSettings.SLUG}`;
HDN.dataLayer.href.canonicalUrl = `${projectSettings.URL}${projectSettings.SLUG}`;
// EXTRA WINDOW-REFS REMOVED HERE AND ADDED IN _DOCUMENT.JS

// HDN.dataLayer object for presentation information
HDN.dataLayer.presentation = HDN.dataLayer.presentation || {};
HDN.dataLayer.presentation.hasSlideshow = "";
HDN.dataLayer.presentation.hasSlideshowListView = "";
HDN.dataLayer.presentation.hasVideo = "";
HDN.dataLayer.presentation.hasInteractive = "";

// HDN.dataLayer object for paywall information
HDN.dataLayer.paywall = HDN.dataLayer.paywall || {};
HDN.dataLayer.paywall.premiumStatus = "isPremium";
HDN.dataLayer.paywall.premiumEndDate = "";

// Special site var
HDN.dataLayer.site = {
  domain: "projects.sfchronicle.com",
  domainRoot: "sfchronicle",
  subDomain: "www",
  name: "premiumsfgate",
  property: "HC",
  siteId: "35",
  siteUrl: "https://www.projects.sfchronicle.com/",
  timeZone: "Pacific"
}

// Add it to public settings so we can put it on the window global
publicSettings.ANALYTICS = JSON.stringify(HDN);

// Check for prod build for asset prefixing
const currentEnv = process.env.NODE_ENV;
// For dev, we want the path to be the root, so no path works great
let assetPath = "";
if (currentEnv == "production"){
  assetPath = `/${publicSettings.PROJECT.SUBFOLDER}/${publicSettings.PROJECT.SLUG}`;
} else if (currentEnv == "testing"){
  assetPath = `/test-proj/${publicSettings.PROJECT.SLUG}`;
}

// Flag as we're compiling
console.log("ENV SET: Compiling for", currentEnv);

// Add it to public settings so we can apply it wherever we need it
publicSettings.ASSET_PATH = assetPath;

module.exports = {
  serverRuntimeConfig: privateSettings, // Will only be available on the server side
  publicRuntimeConfig: publicSettings, // Will be available on both server and client
  async exportPathMap () {

    // Only run dynamic page creation if there's json data 
    let pages;
    if (publicSettings.MULTI_PAGE){
      let json = require('./data/example_data');
      json = json.records;
      // Tranform the list of posts into a map of pages with the pathname `/post/:id`
      pages = json.reduce(
        (pages, post) =>
          Object.assign({}, pages, {
            [`/post/${post.id}`]: {
              page: '/post',
              query: { id: post.id }
            }
          }),
        {}
      )
    }

    // Combine the map of dynamic pages with the home and other static pages
    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/about': { page: '/about' }
    })

  },
  assetPrefix: assetPath
}

_.merge(module.exports, withLess());
