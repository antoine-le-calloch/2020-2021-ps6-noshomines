const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  restartQuestionOption: Joi.boolean().required(),
  displayScoreOption: Joi.boolean().required(),
  answerDisplayOption: Joi.boolean().required(),
})
