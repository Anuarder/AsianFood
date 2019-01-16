<template>
    <v-container>
        <h1 class="display-1 red--text text-capitalize">{{recipes.category}} recipes</h1>
        <p class="title orange--text">
            {{recipes.count}} recipes
        </p>
        <v-layout row wrap class="mt-3">
            <v-flex xs12 md4 class="pa-2" v-for="recipe in recipes.recipes" :key="recipe._id">
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
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['recipes'])
    }
}
</script>
