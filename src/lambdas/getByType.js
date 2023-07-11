const controller = require('../controllers/logs.controller')

const lambda = {
  handler: async (event) => {
    const { type } = event.pathParameters

    try {
      console.info('Process started')

      const log = await controller.getByType(type)

      console.info('Process finished')

      return { statusCode: 200, body: JSON.stringify(log) }
    } catch (error) {
      console.error(`Error (GET By Type): ${error.message}`)
      return error.message
    }
  }
}

module.exports = lambda
