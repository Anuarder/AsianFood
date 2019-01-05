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
import RecipesServices from '@/services/RecipesServices'
export default {
  methods: {
    async sayHi(){
      let recipes = await RecipesServices.getAll();
      console.log(recipes);
    }
  }
}
</script>
