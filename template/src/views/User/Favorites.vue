<template>
  <v-container fluid>
    Favorites
  </v-container>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>
