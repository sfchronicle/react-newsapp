
var exec = require("child_process").execSync;
var path = require("path");
const homedir = require('os').homedir();

exports.description = "A standard starting-point for news app development at the SF Chronicle."
exports.template = function(grunt, init, done) {
  //prelims
  var here = path.basename(process.cwd());

  //process
  init.process(init.defaults, [
    init.prompt("author_name"),
    init.prompt("app_slug", here),
    init.prompt("app_title"),
    init.prompt("app_description"),
    init.prompt("multi_page", "false"),
    init.prompt("embed",'false'),
    init.prompt("github_repo", "sfchronicle/" + here)
  ], function(err, props) {
    //add environment variables, dynamic properties
    var root = init.filesToCopy(props);
    init.copyAndProcess(root, props, { noProcess: "static/**" });

    //returning file permission to files
    exec("chmod 744 tasks/deploy.sh");
    exec("chmod 744 tasks/update-timestamp.sh");
    exec("chmod 744 tasks/google-sheets.js");
    exec("chmod 744 tasks/google-docs.js");

    //grab the github credentials from .credentials.json
    var credentials = grunt.file.readJSON(homedir+"/.credentials.json");

    //install node modules
    console.log("\x1b[33m%s\x1b[0m","\nInstalling Node modules...");
    exec("npm install --cache-min 999999", {encoding: 'utf-8'});

    if (credentials && credentials.github_username && credentials.github_access_token){
      //create github repo
      console.log("\x1b[33m%s\x1b[0m","\nCreating private github repo '"+props.github_repo+"' for this project...");
      var createCmd = JSON.parse(exec("curl --request POST \
        --url https://api.github.com/orgs/sfchronicle/repos \
        --header 'accept: application/vnd.github.inertia-preview+json' \
        --header 'authorization: Basic "+Buffer.from(credentials.github_username+":"+credentials.github_access_token).toString('base64')+"' \
        --header 'content-type: application/json' \
        --data '{\"name\": \""+props.github_repo.replace("sfchronicle/","")+"\",\"description\": \"This is your first repository\",\"homepage\": \"https://www.sfchronicle.com\",\"private\": true,\"has_issues\": true,\"has_projects\": true,\"has_wiki\": true}'", 
        {encoding: 'utf-8'}
      ));
      console.log("\x1b[33m%s\x1b[0m","\nResults: ", createCmd);
      //if there are errors, alert and stop
      if (typeof createCmd.errors != "undefined"){
        console.log("\x1b[33m%s\x1b[0m","\nERROR: There was a problem creating the repo, see output above -- create one manually on GitHub if needed");
      } else {
        //we need to push to create the master branch
        exec('echo "# '+props.github_repo.replace("sfchronicle/","")+'" >> README.md && git init && git add . && git commit -am "Initial commit" && git remote add origin git@github.com:sfchronicle/'+props.github_repo.replace("sfchronicle/","")+'.git && git push -u origin master');
        //if we have a repo created, set protection policy
        var protectCmd = JSON.parse(exec("curl --request PUT \
          --url https://api.github.com/repos/sfchronicle/"+props.github_repo.replace("sfchronicle/","")+"/branches/master/protection \
          --header 'accept: application/vnd.github.luke-cage-preview+json' \
          --header 'authorization: Basic "+Buffer.from(credentials.github_username+":"+credentials.github_access_token).toString('base64')+"' \
          --header 'content-type: application/json' \
          --data '{\"required_status_checks\": null,\"enforce_admins\": false,\"required_pull_request_reviews\": {\"dismissal_restrictions\": {}, \"dismiss_stale_reviews\": false, \"require_code_owner_reviews\": true, \"required_approving_review_count\": 1 },\"restrictions\": null}'", 
          {encoding: 'utf-8'}
        ));
        console.log("\x1b[33m%s\x1b[0m","\nResults: ", protectCmd);
        //if there are errors, alert and stop
        if (typeof protectCmd.errors != "undefined"){
          console.log("\x1b[33m%s\x1b[0m","\nERROR: There was a problem protecting the repo, see output above");
        } else {
          done();
        }
      }
    } else {
      //no creds, but that's okay
      //they can start a repo the old school way
      console.warn("\x1b[33m%s\x1b[0m","\nWARNING: No GitHub credentials were found in ~/.credentials.json, so a repo was not created automatically -- create one manually on GitHub if needed");
    }
  });
};
