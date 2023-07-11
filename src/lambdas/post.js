const controller = require('../controllers/logs.controller')

const lambda = {
  handler: async (event) => {
    const { body } = event

    try {
      console.info('Process started')

      const log = JSON.parse(body)

      const result = await controller.create(log)

      console.info('Process finished')

      return result
    } catch (error) {
      console.error(`Error (POST Log): ${error.message}`)
      return error.message
    }
  }
}

module.exports = lambda
