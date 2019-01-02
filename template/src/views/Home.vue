<template>
  <v-container>
    <v-layout>
      <v-flex xs12  class="text-xs-center">
        <h1>Dashboard page</h1>
        <v-btn color="primary" @click="sayHi">Say hi</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    sayHi(){
      axios.get('http://localhost:8081/recipes')
        .then(res => {
          console.log(res);
        }).catch(err => console.log(err));
    }
  }
}
</script>
