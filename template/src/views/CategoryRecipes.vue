<template>
    <v-container>
        <div v-if="request">
            <v-layout justify-center fill-height class="mt-5">
                <v-progress-circular
                    :size="200"
                    color="red"
                    width="10"
                    indeterminate>
                </v-progress-circular>
            </v-layout>
        </div>
        <div v-if="isLoaded">
            <h1 class="display-1 red--text text-capitalize">{{recipes.category}} recipes</h1>
            <p class="title orange--text">
                {{recipes.count}} recipes
            </p>
            <v-layout row wrap class="mt-3">
                <v-flex xs12 md4 class="pa-2" v-for="recipe in recipes.recipes" :key="recipe._id">
                    <recipe-card :value="recipe"></recipe-card>
                </v-flex>
            </v-layout>
        </div>
    </v-container>
</template>
<script>
import RecipesServices from '../services/RecipesServices.js'
export default {
    data(){
        return {
            recipes: [],
            isLoaded: false,
            request: true
        }
    },
    beforeRouteEnter (to, from, next) {
      RecipesServices.getRecipesByCategory(to.params.category)
        .then(res => {
            let recipes = {
                recipes: res.data.recipes,
                category: to.params.category,
                count: Object.keys(res.data.recipes).length
            }
            next(vm => {
                vm.request = true;
                vm.setData(recipes)
            });
        }).catch(err => console.log(err));
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to.params.category);
        this.request = true;
        this.isLoaded = false;
        this.recipes = [];
        RecipesServices.getRecipesByCategory(to.params.category)
            .then(res => {
                let recipes = {
                    recipes: res.data.recipes,
                    category: to.params.category,
                    count: Object.keys(res.data.recipes).length
                }
                this.setData(recipes);
                console.log(recipes);
                next();
            }).catch(err => console.log(err));
    },
    methods:{
        setData(data){
            this.recipes = data;
            this.request = false;
            this.isLoaded = true;
        },
    }
}
</script>
