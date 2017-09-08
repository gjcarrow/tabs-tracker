var {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      var user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email is already registered to an account. Please try loggin in.'
      })
    }
  }
}
