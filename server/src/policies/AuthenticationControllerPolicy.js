var Joi = require('joi')

module.exports = {
  register (req, res, next) {
    var schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'))
    }

    // Here, the value is the json object of email and password with their values
    var {error, value} = Joi.validate(req.body, schema)

    if (error) {
      console.log(error.details[0].context.key)
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Please ensure the password you've chosen follows these rules: 
            <br>
            <ol>
              <li>It must contain ONLY the following characters: lowercase, uppercase, numerics.</li>
              <li>It must be at LEAST 8 characters long, and not longer than 32 characters.</li>
            </ol>
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Failed to register user at this time. Please try again.'
          })
      }
    } else {
      next()
    }
  }
}
