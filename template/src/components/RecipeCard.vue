<template>
    <v-card class="elevation-3 recipe-card">
        <v-layout>
            <v-flex xs5>
            <v-img
                :src="value.img"
                height="170"
                cover></v-img>
            </v-flex>
            <v-flex xs7>
            <v-card-title primary-title>
                <div>
                <div class="title">{{value.title}}</div>
                <div class="grey--text">{{value.category}}</div>
                </div>
            </v-card-title>
            <v-card-actions>
                <span class="time-to-cook"><i class="far fa-clock"> {{value.time}} min</i></span>
                <div class="bookmark-btn" v-if="token">
                    <v-btn 
                        v-if="isFavorite"
                        icon 
                        @click="deleteFromFavorites(value._id)" 
                        :loading="request">
                        <v-icon color="amber">bookmark</v-icon>
                    </v-btn>
                    <v-btn
                        v-else 
                        icon 
                        @click="addToFavorites(value._id)" 
                        :loading="request">
                        <v-icon>bookmark_border</v-icon>
                    </v-btn>
                </div>
            </v-card-actions>
            </v-flex>
        </v-layout>
    </v-card>
</template>
<script>
import { mapState } from 'vuex'
import RecipesServices from '../services/RecipesServices.js'
export default {
    props:['value'],
    data(){
        return{
            isFavorite: false,
            request: false
        }
    },
    computed:{
        ...mapState(['token', 'user'])
    },
    created(){
        this.checkFavorites();
    },
    methods:{
        checkFavorites(){
            this.user.favorites.forEach(id => {
                if(id === this.value._id){
                    this.isFavorite = true;
                }
            });  
        },
        async addToFavorites(id){
            try{
                this.request = true;
                const response = await RecipesServices.addToFavorite(id);
                console.log(response);
                if(response.data.recipe){
                    this.isFavorite = true;
                    console.log(response.data.recipe);
                    this.$store.dispatch('addToFavorites', id);
                    this.request = false;
                }else{
                    throw 'Error addToFavorites';
                }
            }catch(err){
                console.log(err);
            }
        },
        async deleteFromFavorites(id){
            try{
                this.request = true;
                const response = await RecipesServices.deleteFromFavorites(id);
                console.log(response);
                if(response.data.message){
                    this.isFavorite = false;
                    console.log(response.data.message);
                    this.$store.dispatch('deleteFromFavorites', id);
                    this.request = false;
                }else{
                    throw 'Error deleteFromFavorites';
                }
            }catch(err){
                console.log(err);
            }
        }
    }

}
</script>
