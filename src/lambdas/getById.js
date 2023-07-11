const controller = require('../controllers/logs.controller')

const Common = require('../utils/common.utils')

let common
/**
 * hold your single load here, like secrets.
 */
function onLambdaLoad() {
  common = new Common()
}
onLambdaLoad()

const lambda = {
  handler: async (event) => {
    const { id } = event.pathParameters

    try {
      console.info('Process started')

      const log = await controller.getById(id)

      console.info('Process finished')

      return { statusCode: 200, body: JSON.stringify(log) }
    } catch (error) {
      console.error(`Error (GET By ID): ${error.message}`)
      return error.message
    }
  }
}

module.exports = lambda
