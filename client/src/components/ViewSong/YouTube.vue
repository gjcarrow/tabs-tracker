<template>
  <panel title="Youtube Video">
    <div class="videoWrapper">
      <iframe :src="youtubeUrl" frameborder="0" allowfullscreen></iframe>
    </div>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  name: 'Youtube',
  data () {
    return {
    }
  },
  computed: {
    youtubeUrl () {
      return 'https://www.youtube.com/embed/' + this.youtubeId
    }
  },
  components: {
    Panel
  },
  props: [
    'youtubeId'
  ]
}
</script>
<style lang="css" scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>