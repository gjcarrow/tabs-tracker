var AuthenticationController = require('./controllers/AuthenticationController')
var AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
var SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login',
    AuthenticationController.login
  )
  app.get('/songs',
    SongsController.index
  )
  app.get('/song/:id',
    SongsController.getSingleSong
  )
  app.post('/songs',
    SongsController.createSong
  )
}
