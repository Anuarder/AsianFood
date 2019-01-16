<template>
  <v-container>
    <div class="user-info">
      <v-list two-line>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img v-if="user.image" :src="user.image">
            <img v-else src="https://image.flaticon.com/icons/svg/206/206866.svg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{user.username}}</v-list-tile-title>
            <v-list-tile-sub-title>{{user.email}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
    <div class="user-menu">
      <v-layout row wrap>
        <v-flex
          md3
          xs12>
          <v-card color="amber" dark hover :to="{name: 'favorite'}">
            <v-card-title>
              <div class="headline">Favorites</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex
          md3
          xs12>
          <v-card color="blue" dark hover @click="logout()">
            <v-card-title>
              <div class="headline">Logout</div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['user'])
  },
  methods:{
    logout(){
      this.$store.dispatch('logout');
    }
  }
}
</script>
