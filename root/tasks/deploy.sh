#!/bin/bash

# Run with ./deploy.sh
# Params: subfolder, *project-name
# (starred params are optional)

# stage or prod - Whether the project should deploy to test-proj or the provided public-config subfolder
# NOTE: ^ this script will not create subfolders! They must already exist.
# project name can only be set in public-config.json using the slug field

# Var to track our error state
e="success"

# Callout color for important info
RED='\033[0;31m' 
GREEN='\033[0;32m'  
NC='\033[0m' # No color

# Spinner graphic for the upload delay
spinner(){
  local pid=$!
  local delay=0.15
  local spinstr='|/-\'
  while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
    local temp=${spinstr#?}
    printf " (%c)" "$spinstr"
    local spinstr=$temp${spinstr%"$temp"}
    sleep $delay
    printf "\b\b\b\b\b\b"
  done
  printf "    \b\b\b\b"
}

# param 1 is the directory, param 2 is the old extension, param 3 (if true) converts html to php
updateFile(){
	echo "Running file updates..."
	# JS doesn't really need cache busting anymore -- leave as comment just in case
  # perl -pi -e $replaceJS $1/*.$2
  perl -pi -e $replaceCSS $1/*.$2
  # perl -pi -e $queryJS $1/*.$2
  perl -pi -e $queryCSS $1/*.$2
  if [ "$3" == "true" ]; then
  	# NOTE: This appears to update all HTML in the directory, not just current folder -- modify if that's an issue
  	find . -name "*.html" -exec bash -c 'mv "$1" "${1%.html}".php' - '{}' \;
  fi
}

key="PROJECT"
re="\"($key)\": \"([^\"]*)\""

if [ $# -gt 1 ]; then
  echo -e "${RED}ERROR:${NC} Too many arguments! This deploy script accepts 'stage' or 'prod' as the first and only argument!"
  echo "Exiting deploy script with error..."
	exit 1
fi

if [ -z "$1" ]; then
	echo -e "${RED}ERROR:${NC} stage vs prod not specified!"
	echo "Exiting deploy script with error..."
	exit 1
fi

if [ "$1" != "stage" ] && [ "$1" != "prod" ]; then
	echo -e "${RED}ERROR:${NC} First argument must be stage or prod!"
	echo "Exiting deploy script with error..."
	exit 1
fi

if [ "$1" != "stage" ] && [ "$1" != "prod" ]; then
	echo -e "${RED}ERROR:${NC} First argument must be stage or prod!"
	echo "Exiting deploy script with error..."
	exit 1
fi

if [ "$1" == "stage" ]; then
	export NODE_ENV=testing
	subfolder="test-proj"
fi

if [ "$1" == "prod" ]; then
	export NODE_ENV=production
	subfolder=$(node -pe 'JSON.parse(process.argv[1]).PROJECT.SUBFOLDER' "$(cat public-config.json)")
fi

slug=$(node -pe 'JSON.parse(process.argv[1]).PROJECT.SLUG' "$(cat public-config.json)")

if [ -z "$slug" ]; then
	echo -e "${RED}ERROR:${NC} Slug cannot be blank!"
	echo "Exiting deploy script with error..."
	exit 1
fi

if [ -d "out/" ]; then
	echo -e "${GREEN}SUCCESS:${NC} Out folder exists for this project."
else
	echo -e "${RED}ERROR:${NC} No 'out' folder exists in this project!"
	echo "Exiting deploy script with error..."
	exit 1
fi

# Test if we can access the Projects folder
if [ -d "/Volumes/SFGextras/Projects/" ]; then
  echo -e "${GREEN}SUCCESS:${NC} Accessed Projects folder."
  # Test if we can access the specified subfolder
  if [ -d "/Volumes/SFGextras/Projects/$subfolder" ]; then
  	echo -e "${GREEN}SUCCESS:${NC} Accessed $subfolder folder."
  	# Prompt before we pull the trigger
  	echo -e "All systems go. You are going to deploy ${RED}$slug${NC} to the live Projects server in subfolder ${RED}$subfolder${NC} with name ${RED}$slug${NC}." 
  	read -p "Proceed (Y/n)? " -n 1 -r
		echo ""  # For spacing
		if [[ $REPLY =~ ^[Yy]$ ]]; then
		  echo "User confirmed deployment. Starting..."
		  # Move helper files into folder to be served
		  cp .next/service-worker.js out
		  cp lib/manifest.json out

		  # Format strings for file manipulation
		  random=`date +%s`
		  replaceJS="s/\.js\?.*?(?=(\"|\'))/\.js/g"
		  replaceCSS="s/\.css\?.*?(?=(\"|\'))/\.css/g"
		  queryJS="s/\.js/\.js?$random/g"
		  queryCSS="s/\.css/\.css?$random/g"

		  # Convert main files in out/ folder
		  if ls out/*.php &> /dev/null; then
		  	echo "Updating PHP files..."
		  	updateFile "out" "php"
		  fi

		  if ls out/*.html &> /dev/null; then
		  	echo "Updating HTML files..."
		  	updateFile "out" "html" "true"
		  fi

		  # Traverse other page directory structure
		  for d in out/*; do
			  if [ -d "$d" ]; then
			    echo "Entering $d"

			    if ls $d/*.php &> /dev/null; then
				  	echo "Updating PHP files..."
				  	updateFile "$d" "php"
				  fi

				  if ls $d/*.html &> /dev/null; then
				  	echo "Updating HTML files..."
				  	updateFile "$d" "html" "true"
				  fi

			  fi
			done

		  # Traverse post directory structure
		  for d in out/post/*; do
			  if [ -d "$d" ]; then
			    echo "Entering $d"

			    if ls $d/*.php &> /dev/null; then
				  	echo "Updating PHP files..."
				  	updateFile "$d" "php"
				  fi

				  if ls $d/*.html &> /dev/null; then
				  	echo "Updating HTML files..."
				  	updateFile "$d" "html" "true"
				  fi

			  fi
			done

			# Uncomment the lines below to prevent actual deploy for testing
			# echo "EXIT EARLY!"
			# exit 1

		  echo "Uploading files to server..."
		  cp -a out/. "/Volumes/SFGextras/Projects/$subfolder/$slug" &
		  spinner
		  echo -e "${GREEN}DEPLOY COMPLETE.${NC} Exiting..."
		else 
			echo "INFO: User cancelled deployment. Exiting..."
		fi
  else
		# We couldn't access subfolder
		echo -e "${RED}ERROR:${NC}: Subfolder $1 does not exist or cannot be accessed!"
		e="error"
	fi
else
	# We couldn't access /Projects/
	echo -e "${RED}ERROR:${NC}: Projects folder does not exist or cannot be accessed!"
	e="error"
fi

if [ "$e" == "error" ]; then
	echo "Exiting deploy script with error..."
fi