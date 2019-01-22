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
                <div class="bookmark-btn">
                    <v-btn icon><v-icon>bookmark_border</v-icon></v-btn>
                </div>
            </v-card-actions>
            </v-flex>
        </v-layout>
    </v-card>
</template>
<script>
export default {
    props:['value']
}
</script>
