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

# Set output folder variables
SCHEMA_OUTPUT_FOLDER="/${SERVER_FOLDER}/${SWAGGER_FOLDER}"
API_FOLDER_OUTPUT="${SERVER_FOLDER}/${API_FOLDER}"
TEMPLATES_FOLDER_OUTPUT="${SERVER_FOLDER}/${SWAGGER_FOLDER}/${TEMPLATES_FOLDER}"

# Generate TypeScript API client
echo "Generating ${API_FOLDER_OUTPUT}"

mkdir -p ./${API_FOLDER_OUTPUT}
mkdir -p ./${TEMPLATES_FOLDER_OUTPUT}

npx swagger-typescript-api -p .${SCHEMA_OUTPUT_FOLDER}/${SCHEMA_NAME} -o ${API_FOLDER_OUTPUT} -t .${TEMPLATES_FOLDER_OUTPUT}
