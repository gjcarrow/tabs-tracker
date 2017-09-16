import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  },
  getSingleSong (songId) {
    return Api().get(`song/${songId}`)
  }
}

// Then it could be called from register view like this:
// SongService.getAllSongs()
