<template>
  <v-container fluid class="home">
    <v-toolbar color="transparent" flat>
      <v-avatar
        class="home-link"
        @click="goLink('home')"
        :tile="true">
        <img src="../assets/Logo.png">
      </v-avatar>
      <v-toolbar-title class="home-link" @click="goLink('home')">
        <span class="red--text">ASIAN</span> FOOD
      </v-toolbar-title>
      <div class="ml-3 hidden-sm-and-down">
        <v-menu offset-y>
          <v-btn
            slot="activator"
            flat
            color="red">
            Select category
          </v-btn>
          <v-list class="menu-list">
            <v-list-tile
              v-for="item in categories"
              :key="item.title"
              :to="`/recipes/${item.name}`">
              <v-avatar
                size="20">
                <img :src="item.icon">
              </v-avatar>
              <v-list-tile-title class="ml-2">{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
      <v-text-field
          append-icon="search"
          color="red"
          label="Search"
          class="search-panel hidden-sm-and-down ma-3"></v-text-field>
      <div class="login-user">
        <v-btn v-if='!token' dark flat color="amber" class="hidden-sm-and-down" @click="goLink('login')">Login</v-btn>
        <div v-else class="hidden-sm-and-down">
          <v-btn icon><v-icon color="pink" @click="goLink('favorites')">bookmark</v-icon></v-btn>
          <v-btn icon><v-icon color="primary" @click="logout()">input</v-icon></v-btn>
        </div>
      </div>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      disable-resize-watcher
      right
      class="white">
      <v-toolbar flat class="grey lighten-5">
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title 
                class="title red--text">Menu</v-list-tile-title>
            </v-list-tile-content>
            <v-btn v-if='!token' flat dark color="amber" @click="goLink('login')">Login</v-btn>
            <div v-else>
              <v-btn icon><v-icon color="pink" @click="goLink('favorites')">bookmark</v-icon></v-btn>
              <v-btn icon><v-icon color="primary" @click="logout()">input</v-icon></v-btn>
            </div>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <!-- Menu List -->
      <v-list>
        <v-list-tile
          class="mb-2">
          <v-text-field
            append-icon="search"
            color="red"
            label="Search"
            class="menu-search-panel"></v-text-field>
        </v-list-tile>
        <v-subheader>
          Select category
        </v-subheader>
        <v-list-tile
          v-for="item in categories"
          :key="item.name"
          :to="`/recipes/${item.name}`">
          <v-list-tile-action>
            <img :src="item.icon" width="30" class="menu-img">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="menu-link">{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <router-view></router-view>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data(){
    return{
      drawer: false,
      categories: [
        {icon: 'https://image.flaticon.com/icons/svg/197/197582.svg', title: 'Korean', name: 'korean'},
        {icon: 'https://image.flaticon.com/icons/svg/197/197452.svg', title: 'Thai', name: 'thai'},
        {icon: 'https://image.flaticon.com/icons/svg/197/197375.svg', title: 'Chineese', name: 'chinese'},
        {icon: 'https://image.flaticon.com/icons/svg/197/197604.svg', title: 'Japanese', name: 'japanese'},
      ],
    }
  },
  computed: {
    ...mapState(['token', 'user'])
  },
  methods: {
    goLink(link){
      this.$router.push({name: link})
    },
    logout(){
      this.$store.dispatch('logout');
      this.$router.push({name: 'home'});
    }
  }
}
</script>
<style scoped>
  .home{
    font-family: 'Baloo', sans-serif;
  }
  .menu-list{
    font-family: 'Baloo', sans-serif;
  }
  .v-list .v-list__tile--active .v-list__tile__title{
    color: #373746;
  }
  .menu-search-panel{
    width: 100%;
  }
</style>
