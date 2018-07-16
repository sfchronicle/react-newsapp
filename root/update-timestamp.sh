#!/bin/bash

# Run with ./update-timestamp.sh
# This script will modify public-config.json to add the MOD_DATE field if user chooses to update the pubdate

# Get colors for later
RED='\033[0;31m' 
GREEN='\033[0;32m'  
NC='\033[0m' # No color
# Get folders for later
subfolder=$(node -pe 'JSON.parse(process.argv[1]).PROJECT.SUBFOLDER' "$(cat public-config.json)")
slug=$(node -pe 'JSON.parse(process.argv[1]).PROJECT.SLUG' "$(cat public-config.json)")
# Get date, format a.m./p.m. properly
MOD_DATE=$(date +"%B %e, %Y %l:%M %p")
MOD_DATE=${MOD_DATE/AM/a.m.}
MOD_DATE=${MOD_DATE/PM/p.m.}

# Test if we can access the subfolder
if [ -d "/Volumes/SFGextras/Projects/$subfolder" ]; then

	# Test if we can access the destination folder (OK if not)
	if [ -d "/Volumes/SFGextras/Projects/$subfolder/$slug" ]; then
		echo -e "${GREEN}SUCCESS:${NC} Destination folder exists for this project. This script can update the timestamp if needed."
		read -p "Update (y/N)? " -n 1 -r
		echo ""  # For spacing
		if [[ $REPLY =~ ^[Yy]$ ]]; then
			echo -e "User approved timestamp update. Modifying files..."
			echo $MOD_DATE
			json -I -f public-config.json -e "this.PROJECT.MOD_DATE='${MOD_DATE}'"
		else 
			echo -e "User declined timestamp update. Continuing on..."
		fi
	else
		echo -e "${RED}WARNING:${NC} Destination folder does not already exist, but that's expected if this is the first deploy. Continuing on..."
	fi

else 
	echo -e "${RED}ERROR:${NC} Subfolder does not already exist! Needs to exist for deploy to succeed."
	exit 1
fi