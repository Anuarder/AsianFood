<template>
  <v-container>
    <v-layout wrap row>
      <v-flex xs12 class="text-xs-center mb-3">
        <h1>Dashboard page</h1>
        <v-btn color="primary" @click="sayHi">Say hi</v-btn>
        <v-btn color="primary" @click="logout">Log out</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-alert
          v-if="error"
          :value="true"
          type="error">
          {{error}}
        </v-alert>
        <v-list>
            <v-list-tile
              v-for="(item, index) in recipes"
              :key="item._id">
              <v-list-tile-content>
                <v-list-tile-title>{{index+1}}) {{item.title}}</v-list-tile-title>
                <v-list-tile-sub-title>{{item.category}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import RecipesServices from '@/services/RecipesServices'
export default {
  data(){
    return{
      recipes: [],
      error: ''
    }
  },
  created(){
    this.sayHi();
  },
  methods: {
    async sayHi(){
      try{  
        let recipes = await RecipesServices.getAll();
        console.log(recipes.data);
        this.recipes = recipes.data;

      }catch(error){
        console.log(error);
        this.error = "Auth failed";
      }
    },
    logout(){
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>
