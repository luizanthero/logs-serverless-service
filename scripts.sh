#!/bin/bash
set -e

case "$1" in
  test)
    echo "Starting Unit Tests..."

    export NODE_ENV=test

    jest --coverage --forceExit --detectOpenHandles
  ;;
  local)
    echo "Starting Lambdas Locally..."

    NODE_PATH=.
    SLS_DEBUG=true
    source .env.local

    npx serverless offline start --stage local  --noPrependStageInUrl --region sa-east-1 ${@: 2}
  ;;
  deploy)
    echo "Starting Deploy..."

    source .env.local

    npx serverless deploy --stage local --verbose
  ;;
  destroy)
    echo "Starting Destroy..."

    source .env.local

    npx serverless remove --stage local --verbose
  ;;
  deploy:dynamo)
    echo "Starting Create DynamoDB Table..."

    source .env.local

    awslocal dynamodb create-table --endpoint-url=http://localhost:4566 --table-name $DYNAMODB_TABLE_NAME \
          --attribute-definitions AttributeName=id,AttributeType=S \
          --key-schema AttributeName=id,KeyType=HASH \
          --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
  ;;
  destroy:dynamo)
    echo "Starting Destory DynamoDB Table..."

    source .env.local

    awslocal dynamodb delete-table --endpoint-url=http://localhost:4566 --table-name $DYNAMODB_TABLE_NAME
  ;;
  *)
    echo "Usage: {test|local|deploy|destroy|deploy:dynamo|destroy:dynamo}"
    
    exit 1
  ;;
esac