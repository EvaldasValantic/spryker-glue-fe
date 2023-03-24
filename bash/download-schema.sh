#!/bin/bash

# Load the environment variables from the .env file
source .env

# Initialize flag variable
flag=1

# Check if all required environment variables are set
for variable in SERVER_FOLDER SWAGGER_FOLDER SCHEMA_NAME API_FOLDER TEMPLATES_FOLDER; do
    if [ -z "${!variable}" ]; then
        echo "Error: $variable is not set"
        flag=0
    fi
done

# Exit if any required variables are missing
if [ $flag -eq 0 ]; then
    exit 1
fi

# Download the schema from the API
echo "Downloading $SPRYKER_SCHEMA_URL to $SCHEMA_OUTPUT_FOLDER/$SCHEMA_NAME"

SCHEMA_OUTPUT_FOLDER="/${SERVER_FOLDER}/${SWAGGER_FOLDER}"

SCHEMA_OUTPUT_FILE="/${SCHEMA_OUTPUT_FOLDER}/${SCHEMA_NAME}"

mkdir -p .$SCHEMA_OUTPUT_FOLDER

curl -L $SPRYKER_SCHEMA_URL -o ./$SCHEMA_OUTPUT_FILE
