const controller = require('../controllers/logs.controller')

const lambda = {
  handler: async (event) => {
    const { author } = event.pathParameters

    try {
      console.info('Process started')

      const log = await controller.getByAuthor(author)

      console.info('Process finished')

      return { statusCode: 200, body: JSON.stringify(log) }
    } catch (error) {
      console.error(`Error (GET By Author): ${error.message}`)
      return error.message
    }
  }
}

module.exports = lambda
