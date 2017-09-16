<template>
  <div class="elevation-2">
    <v-layout>
      <v-flex sm12 md6>
        <div>
          <p class="light-primary-color-text">{{ song.title}}</p>
          <p class="light-primary-color-text">{{ song.artist}}</p>
        </div>
<!--         <v-card dark class="secondary">
          <v-card-text class="px-0 song-info">
            {{ song.title }}
          </v-card-text>
            <v-divider dark></v-divider>
          <v-card-text class="px-0 song-info">
            {{ song.artist }}
          </v-card-text>
            <v-divider dark></v-divider>
          <v-card-text class="px-0 song-info">
            {{ song.album }}
          </v-card-text>
        </v-card>
 -->  <!--           <p>Song title is: {{ song.title }}</p>
            <p>Song album is: {{ song.album }}</p> -->
      </v-flex>
      <v-flex sm12 md6>
        {{ song.album }}
        {{ song.genre }}
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  import SongService from '@/services/SongService'
  import Panel from '@/components/Panel'

  export default {
    data () {
      return {
        song: {}
      }
    },
    async created () {
      var songId = this.$props.id
      var song = await SongService.getSingleSong(songId)
      this.song = song.data.song
    },
    components: {
      Panel
    },
    props: ['id']
  }
</script>
<style scoped>
  .song-info {
    font-size:  18px;
    font-weight: 100;
    text-transform: capitalize;
  }
</style>