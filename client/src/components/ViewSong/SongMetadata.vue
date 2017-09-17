<template>
  <v-layout row wrap align-center>
    <v-flex xs12 sm6>
      <div class="song-info sub-flex">
        <div class="song-title">
          {{ song.title }}
        </div>
        <div class="song-artist">
          {{ song.artist }}
        </div>
        <div class="song-genre">
          {{ song.genre }}
        </div>
      </div>
    </v-flex>
    <v-flex xs12 sm6>
      <div class="sub-flex album-image">
        <img :src="song.albumImageUrl" />
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    props: [
      'song'
    ]
  }
</script>
<style scoped>
  .song-info {
    font-size:  20px;
    font-weight: 100;
    text-transform: capitalize;
  }
  .album-image {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    /* display: none; */
  }
  .tab-area {
    width: 90%;
    margin: auto;
    height: 300px;
  }
  @media screen and (max-width:600px) {
    .flex.xs12.sm6:first-child {
      order: 2;
    }  
    .sub-flex {
      min-height: 500px;
    }
  }
</style>