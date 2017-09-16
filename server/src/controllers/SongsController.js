/* eslint-disable no-unused-vars */
var {Song} = require('../models')
var jwt = require('jsonwebtoken')
var config = require('../config/config')

module.exports = {
  async index (req, res) {
    try {
      var songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (e) {
      res.status(500).send({
        error: 'An error has occurred trying to retreive the songs'
      })
    }
  },
  async createSong (req, res) {
    try {
      var song = await Song.create(req.body)
      res.send(song)
    } catch (e) {
      res.status(500).send({
        error: 'An error has occurred attempting to create the song'
      })
    }
  },
  async getSingleSong (req, res) {
    try {
      var songId = req.params.id
      var song = await Song.findOne({
        where: {
          id: songId
        }
      })

      if (!song) {
        res.status(403).send('Unable to fetch that song.')
      }

      var songJson = song.toJSON()
      res.send({
        song: songJson
      })
    } catch (e) {
      res.status(500).send('There was a problem retrieveing song.')
      console.log(e)
    }
  }
}
