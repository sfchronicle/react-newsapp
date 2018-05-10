var exec = require("child_process").exec;
var path = require("path");

exports.description = "A standard starting-point for react news app development at The SF Chronicle."
exports.template = function(grunt, init, done) {
  //prelims
  var here = path.basename(process.cwd());

  //process
  init.process(init.defaults, [
    init.prompt("author_name"),
    init.prompt("app_name", here),
    init.prompt("app_description"),
    init.prompt("multi_page", "false"),
    init.prompt("embed",'false'),
    init.prompt("github_repo", "sfchronicle/" + here)
  ], function(err, props) {
    //add environment variables, dynamic properties

    var root = init.filesToCopy(props);
    init.copyAndProcess(root, props, { noProcess: "static/**" });

    //returning file permission to file
    exec("chmod 744 deploy.sh");
    
    //install node modules
    console.log("\x1b[33m%s\x1b[0m","\nInstalling Node modules...");
    exec("npm install --cache-min 999999");

    //initiliazing git
    console.log("\x1b[33m%s\x1b[0m", "\nInitialized git\n");
    exec("git init", done);
  });
};