<template>
  <v-card class="mb-4 elevation-4">
    <v-card-media width="100%" height="100px" :src="albumImageUrl">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="song-title headline mb-0 light-primary-color-text">{{ artist }}</h3>
        <h5 class="song-album light-primary-color-text">{{ album }}</h5>
        <h5 class="song-title light-primary-color-text">{{ title }}</h5>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat class="red--text action-2"
        :to="{
                name: 'song',
                params: {
                  id: id
                }
              }"
    ><v-icon class="accent-shade-color" large>explore</v-icon></v-btn> 
   </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    props: [
      'title',
      'artist',
      'album',
      'genre',
      'id',
      'albumImageUrl'
    ],
    methods: {
      // navigateTo (song) {
      //   this.$router.push(song)
      // }
    }
  }
</script>
<style scoped>
  .song-title {
    font-size: 30px;
  }
  .song-genre {}
  .song-album {}
  .song-artist {}
  .album-image {
    width: 100%;
  } 
</style>