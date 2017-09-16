<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Information">
         <v-text-field
           label="Title"
           type="text"
           required
           :rules="[required]"
           v-model="song.title"
          ></v-text-field>
         <v-text-field
           label="Artist"
           type="text"
           required
           :rules="[required]"
           v-model="song.artist"
         ></v-text-field>
         <v-text-field
           label="genre"
           type="text"
           required
           :rules="[required]"
           v-model="song.genre"
         ></v-text-field>
         <v-text-field
           label="Album"
           type="text"
           required
           :rules="[required]"
           v-model="song.album"
         ></v-text-field>
         <v-text-field
           label="Album Image Url"
           type="text"
           required
           :rules="[required]"
           v-model="song.albumImageUrl"
         ></v-text-field>
         <v-text-field
           label="YouTube ID"
           type="text"
           required
           :rules="[required]"
           v-model="song.youtubeId"
         ></v-text-field>
      </panel> 
    </v-flex>
    <v-flex xs8>
      <Panel title='Song Structure' class="ml-3">
       <v-text-field
         label="Guitar Tab"
         multi-line
         required
         :rules="[required]"
         v-model="song.tab"
         ></v-text-field>
       <v-text-field
         label="Song Lyrics"
         multi-line
         required
         :rules="[required]"
         v-model="song.lyrics"
         ></v-text-field>
      </Panel>
      
      <div class="danger-alert mt-2" v-if="error">{{error}}</div>
      <v-btn
        dark
        class='blue-grey'
        @click="create"
       >
        Create Song
      </v-btn>

    </v-flex>
  </v-layout>
</template>
<script>
  import Panel from '@/components/Panel'
  import SongService from '@/services/SongService'

  export default {
    data () {
      return {
        song: {
          title: null,
          artist: null,
          genre: null,
          album: null,
          albumImageUrl: null,
          lyrics: null,
          youtubeId: null,
          tab: null
        },
        error: null,
        required: (value) => !!value || 'Required.'
      }
    },
    methods: {
      async create () {
        this.error = null
        var allFieldsFilledIn = Object
          .keys(this.song)
          .every(key => !!this.song[key])
        if (!allFieldsFilledIn) {
          this.error = 'Please fill in all required fields'
          return
        }
        try {
          await SongService.post(this.song)
          this.$router.push({name: 'songs'})
        } catch (e) {
          console.log(e)
        }
      }
    },
    components: {
      Panel
    }
  }
</script>
<style scoped>
  .danger-alert {
    color: red;
  }
</style>