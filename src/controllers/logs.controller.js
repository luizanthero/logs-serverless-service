const service = require('../services/logs.service')

const controller = {
  getById: async (id) => await service.getById(id),

  getByType: async (type) => await service.getByType(type),

  getByEntity: async (entity) => await service.getByEntity(entity),

  getByKey: async (key) => await service.getByKey(key),

  create: async (payload) => await service.create(payload)
}

module.exports = controller
