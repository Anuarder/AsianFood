<template>
    <v-container>
        <div v-if="request">
            <v-layout justify-center class="mt-5">
                <v-progress-circular
                    :size="200"
                    color="red"
                    width="10"
                    indeterminate>
                </v-progress-circular>
            </v-layout>
        </div>
        <div v-if="isLoaded">
            <h1 class="display-1 red--text">Favorites</h1>
            <v-layout row wrap class="mt-3">
                <v-flex xs12 md4 class="pa-2" v-for="recipe in allRecipes" :key="recipe._id">
                    <recipe-card :value="recipe"></recipe-card>
                </v-flex>
            </v-layout>
        </div>
    </v-container>
</template>
<script>
import RecipesServices from '../../services/RecipesServices.js'
export default {
    data(){
        return{
            allRecipes: null,
            isLoaded: false,
            request: false,
        }
    },
    created(){
        this.getAllRecipes();
    },
    methods:{
        async getAllRecipes(){
            try{
                this.request = true;
                let response = await RecipesServices.getFavoritesRecipes();
                this.allRecipes = response.data.recipes;
                console.log(this.allRecipes);
                this.request = false;
                this.isLoaded = true;
            }catch(err){
                console.log(err);
            }
        }
    }

}
</script>
