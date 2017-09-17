<template>
  <panel :title="song.title">
    <SongMetadata :song='song' />
  </panel>
</template>
<script>
  import SongService from '@/services/SongService'
  import Panel from '@/components/Panel'
  import SongMetadata from './SongMetadata'

  export default {
    data () {
      return {
        song: {
          title: ''
        }
      }
    },
    async created () {
      var songId = this.$props.id
      var song = await SongService.getSingleSong(songId)
      this.song = song.data.song
    },
    components: {
      Panel,
      SongMetadata
    },
    props: ['id']
  }
</script>
<style scoped>
  
</style>