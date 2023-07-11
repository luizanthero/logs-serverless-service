const schema = require('../schemas/logs.schema')

const service = {
  getById: async (id) => {
    const log = await schema.getById(id)

    if (!log) throw Error('Log not found')

    return log
  },

  getByType: async (type) => {
    const log = await schema.getByType(type)

    if (!log) throw Error('Log not found')

    return log
  },

  getByEntity: async (entity) => {
    const log = await schema.getByEntity(entity)

    if (!log) throw Error('Log not found')

    return log
  },

  getByKey: async (key) => {
    const log = await schema.getByKey(key)

    if (!log) throw Error('Log not found')

    return log
  },

  create: async (payload) => {
    const log = await schema.create(payload)

    if (!log) throw Error('Internal Error')

    return log
  }
}

module.exports = service
