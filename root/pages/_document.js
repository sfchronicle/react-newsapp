
// ./pages/_document.js
// Custom master doc that overrides the default

// Next.js Boilerplate
import React, { Fragment } from "react";
import Document, { Head, Main, NextScript } from 'next/document';

// Import styles -- this file imports everything
import "../styles/seed.less";

// Components
import Footer from "../components/Footer";

// Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();
 
export default class MyDocument extends Document {

  render() {
    const isResponsiveBody = publicRuntimeConfig.EMBEDDED ? ("responsive-body") : ("");

    return (
      <html>
        <Head>
          <link rel="stylesheet" href={`${publicRuntimeConfig.ASSET_PATH}/_next/static/style.css`} />
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          { publicRuntimeConfig.EMBEDDED ? (
            <script src="https://projects.sfchronicle.com/shared/js/responsive-child.js"></script>
          ) : (
            <Fragment>
              <script type="text/javascript" src="https://treg.hearstnp.com/treg.js"></script>
              <script dangerouslySetInnerHTML={{ __html: `
                $script = document.createElement("script");
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
                $script.src = t;
                document.getElementsByTagName("HEAD")[0].appendChild($script);
             `}} />
            </Fragment>
          )}
        </Head>
        
        <body is={isResponsiveBody}>
          <Main />
          <Footer />
          <NextScript />
          {/* End-of-doc scripts can be added here if needed (and don't have a React module) */}
        </body>
      </html>
    )
  }
}