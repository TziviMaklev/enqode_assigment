<template>
  <div>
    <ZeroTrustScoreWidget :data="jsonData" />
  </div>
</template>

<script>
import ZeroTrustScoreWidget from './components/ZeroTrustScoreWidget.vue'
import jsonData from '../data.json' // Replace with your JSON data path

  export default {
    components: {
      ZeroTrustScoreWidget,
    },
    data() {
      return {
        jsonData,
      }
    },
  }
</script>
