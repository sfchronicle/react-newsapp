
// ./pages/_document.js
// Custom master doc that overrides the default

// Next.js Boilerplate
import React, { Fragment } from "react";
import Document, { Head, Main, NextScript } from 'next/document';

// Import any styles needed in document
import "../styles/sfchronicle.less";
import "../styles/footer.less";
import "../styles/interactives.less";
import "../styles/project.less";

// Components
import Footer from "../components/Footer";

// Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();
 
export default class MyDocument extends Document {

  render() {
    const isResponsiveBody = publicRuntimeConfig.EMBEDDED ? ("responsive-body") : ("");

    // Set ispremium meta
    let isPremium = "1";
    if (publicRuntimeConfig.PAYWALL_SETTING == "free"){
      isPremium = "0";
    }

    return (
      <html>
        <Head>
          <link rel="stylesheet" href={`${publicRuntimeConfig.ASSET_PATH}/_next/static/style.css`} />
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="ispremium" content={isPremium} />
          <meta name="theme-color" content="#eeeeee" />
          <link rel="apple-touch-icon" href="https://projects.sfchronicle.com/shared/logos/sfletter_c_black.png" />
          <meta name="apple-mobile-web-app-title" content="Hacker News" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="manifest" href={`${publicRuntimeConfig.ASSET_PATH}/manifest.json`} />
          { publicRuntimeConfig.EMBEDDED ? (
            <script src="https://projects.sfchronicle.com/shared/js/responsive-child.js"></script>
          ) : (
            <Fragment>
              <script src="https://projects.sfchronicle.com/shared/js/jquery.min.js"></script>
              <script src="https://treg.hearstnp.com/treg.js"></script>
              <script dangerouslySetInnerHTML={{ __html: `
                $scriptEn = document.createElement("script");
                var t = '//nexus.ensighten.com/hearst/news/Bootstrap.js';
                if (document.cookie.indexOf("nsghtn") > -1) {
                  if(document.cookie.indexOf("nsghtn=test-dev") > -1) {
                  console.log("Ensighten :: Test-Dev"); t = "//nexus-test.ensighten.com/hearst/news-dev/Bootstrap.js";
                  } else if(document.cookie.indexOf("nsghtn=test") > -1) {
                  console.log("Ensighten :: Test"); t = "//nexus-test.ensighten.com/hearst/news/Bootstrap.js";
                  } else if(document.cookie.indexOf("nsghtn=dev") > -1) {
                  console.log("Ensighten :: Dev"); t = "//nexus.ensighten.com/hearst/news-dev/Bootstrap.js";
                  }
                }
                $scriptEn.src = t;
                $scriptEn.async = false;
                document.getElementsByTagName("HEAD")[0].appendChild($scriptEn);
             `}} />
              <script src="https://cdn.blueconic.net/hearst.js"></script>
            </Fragment>
          )}
        </Head>
        
        <body is={isResponsiveBody}>
          <Main />
          { !publicRuntimeConfig.EMBEDDED &&
            <Footer />
          }
          <NextScript />
          {/* End-of-doc scripts can be added here if needed (and don't have a React module) */}
        </body>
      </html>
    )
  }
}