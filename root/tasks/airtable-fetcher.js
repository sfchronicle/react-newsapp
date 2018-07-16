#!/usr/bin/env node

var http = require("https");

// Get data from config
let nextConfig = require("./next.config.js");
nextConfig = nextConfig.serverRuntimeConfig.DATA;
for (var i = 0; i < nextConfig.length; i++){
	let airtableID = nextConfig[i].AIRTABLE_ID;
	let apiKey = nextConfig[i].API_KEY;
	let name = nextConfig[i].NAME;

	// Make the request to Airtable
	var options = {
	  "method": "GET",
	  "hostname": "api.airtable.com",
	  "port": null,
	  "path": `/v0/${airtableID}/Data?view=Grid%20view&maxRecords=3`,
	  "headers": {
	    "authorization": `Bearer ${apiKey}`,
	  }
	};

	var req = http.request(options, function (res) {
	  var chunks = [];

	  res.on("data", function (chunk) {
	  	// Receive the data... in chunks? Why, Node?
	    chunks.push(chunk);
	  });

	  res.on("end", function () {
	  	// Put the chunks together I guess
	    var body = Buffer.concat(chunks);

	    // Make a real object and re-stringify to make it pretty 
	    var prettyData = JSON.parse(body.toString()); 
	    prettyData = JSON.stringify(prettyData, null, 2);

	    // Write out the file
			var writeFile = require('write');
			writeFile(`data/${name}.json`, prettyData, function(err) {
			  if (err) console.log(err);
			});
	  });
	});

	req.end();
}

 