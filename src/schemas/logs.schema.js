const { v1 } = require('uuid')

const connection = require('../configs/dynamo.config')

const schema = {
  TABLE_NAME: `${process.env.NAME}.logs`,

  getById: async (id) => {
    const params = {
      TableName: schema.TABLE_NAME,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: { '#id': 'id' },
      ExpressionAttributeValues: { ':id': id }
    }

    return connection.documentClient
      .query(params)
      .promise()
      .then((result) => result.Items[0])
  },

  getByType: async (type) => {
    const params = {
      TableName: schema.TABLE_NAME,
      FilterExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': type }
    }

    return connection.documentClient
      .scan(params)
      .promise()
      .then((result) => result.Items)
  },

  getByEntity: async (entity) => {
    const params = {
      TableName: schema.TABLE_NAME,
      FilterExpression: '#entity = :entity',
      ExpressionAttributeNames: { '#entity': 'entity' },
      ExpressionAttributeValues: { ':entity': entity }
    }

    return connection.documentClient
      .scan(params)
      .promise()
      .then((result) => result.Items)
  },

  getByKey: async (key) => {
    const params = {
      TableName: schema.TABLE_NAME,
      FilterExpression: '#key = :key',
      ExpressionAttributeNames: { '#key': 'key' },
      ExpressionAttributeValues: { ':key': key }
    }

    return connection.documentClient
      .scan(params)
      .promise()
      .then((result) => result.Items[0])
  },

  create: async (payload) => {
    const data = {
      id: v1(),
      ...payload,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const params = { TableName: schema.TABLE_NAME, Item: data, ReturnValues: 'ALL_OLD' }

    return await connection.documentClient.put(params).promise()
  }
}

module.exports = schema
