<template>
  <v-container fluid>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">Asian Food</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat :to="{name: 'login'}">
        Login
      </v-btn>
      <v-btn flat :to="{name: 'register'}">
        Register
      </v-btn>
  </v-toolbar>
  <router-view></router-view>
  </v-container>
</template>
