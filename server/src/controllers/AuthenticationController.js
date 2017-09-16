var {User} = require('../models')
var jwt = require('jsonwebtoken')
var config = require('../config/config')

function jwtSignUser (user) {
  var ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      var user = await User.create(req.body)
      var userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email is already registered to an account. Please try loggin in.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The email entered is not associated with this application. Please enter a different email addresss, or register with us.'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The password is incorrect.'
        })
      }
      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error occurred during log in'
      })
    }
  }
}
