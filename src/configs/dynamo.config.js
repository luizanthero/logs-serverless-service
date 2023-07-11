const https = require('https')
const http = require('http')
const AWS = require('aws-sdk')

const agentOptions = {
  keepAlive: true,
  maxSockets: Infinity // Infinity == 50
}

const agent = /local|test/.test(process.env.NODE_ENV) ? new http.Agent(agentOptions) : new https.Agent(agentOptions)

AWS.config.update({
  region: process.env.DYNAMODB_REGION,
  endpoint: process.env.DYNAMODB_ENDPOINT,
  httpOptions: { agent }
})

const connection = { dynamodb: new AWS.DynamoDB(), documentClient: new AWS.DynamoDB.DocumentClient() }

module.exports = connection
