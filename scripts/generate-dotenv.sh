#! /bin/bash

# Remove any existing .env file
rm -f .env

# Loop over all the .env files in the packages directory
for f in ./packages/*/.env; do
  echo "# VARIABLES FROM $f" >>.env
  # Check if the file exists
  if [ -f "$f" ]; then
    # Append the contents of the file to the .env file
    cat $f >>.env
    echo '\n' >>.env
  fi
done
