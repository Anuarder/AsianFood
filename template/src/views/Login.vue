<template>
  <v-container fluid class="login">
    <v-layout row fill-height align-center class="login-card elevation-10">
      <v-flex offset-sm6 class="login-form">
          <h1 class="home-link" @click="goLink('home')">ASIAN FOOD</h1>
          <h4>Food asian and Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
          <v-form class="mt-3 mb-3" @submit.prevent>
            <v-alert
              v-model="alert"
              outline
              class="error-alert mb-3"
              dismissible
              type="error">
              {{error_message}}
            </v-alert>
            <v-text-field
              class="login-input"
              label="Email"
              v-model="email"></v-text-field>
            <v-text-field
              class="login-input mb-3"
              label="Password"
              v-model="password"
              type="password"></v-text-field>
            <v-btn
              @click="login()"
              color="orange"
              type="submit"
              dark
              large
              class="elevation-8"
              right
              :loading="performingRequest">sign in</v-btn>
          </v-form>
          <h5>Don't have an account? <span class="orange--text router-btn" @click="goLink('register')">SIGN UP</span></h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Auth from '@/services/Auth'
export default {
  data(){
    return{
      alert: false,
      email: '',
      password: '',
      error_message: '',
      performingRequest: false
    }
  },
  methods:{
    goLink(link){
      this.$router.push({name: link})
    },
    async login(){
      try{
        event.preventDefault();
        this.performingRequest = true;
        const response = await Auth.login({
          email: this.email,
          password: this.password
        });
        console.log(response);
        if(response.data.token){
          this.performingRequest = false;
          this.$store.dispatch('setUserToken', response.data.token);
          this.$store.dispatch('setUserData', response.data.user);
          this.$router.push({name: 'home'});
        }else{
          this.performingRequest = false;
          this.alert = true;
          throw response.data.error;
        }
      }catch(error){
        this.error_message = error;
      }
    }
  }
}
</script>
