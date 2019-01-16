<template>
    <v-container>
        <h1 class="display-1 red--text">Welcome to your Kitchen</h1>
        <p class="subheading amber--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quidem expedita qui atque iure? Beatae.
        </p>
        <v-layout row wrap class="mt-3">
            <v-flex xs12 md4 class="pa-2" v-for="recipe in allRecipes" :key="recipe._id">
                <v-card class="elevation-3 recipe-card">
                <v-layout>
                    <v-flex xs5>
                    <v-img
                        :src="recipe.img"
                        height="170"
                        cover></v-img>
                    </v-flex>
                    <v-flex xs7>
                    <v-card-title primary-title>
                        <div>
                        <div class="title">{{recipe.title}}</div>
                        <div class="grey--text">{{recipe.category}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <span class="time-to-cook"><i class="far fa-clock"> {{recipe.time}} min</i></span>
                    </v-card-actions>
                    </v-flex>
                </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import RecipesServices from '../services/RecipesServices.js'
export default {
    data(){
        return{
            allRecipes: []
        }
    },
    created(){
        this.getAllRecipes();
    },
    methods:{
        async getAllRecipes(){
            try{
                let response = await RecipesServices.getAll();
                console.log(response);
                this.allRecipes = response.data.recipes;
            }catch(err){
                console.log(err);
            }
        }
    }

}
</script>
