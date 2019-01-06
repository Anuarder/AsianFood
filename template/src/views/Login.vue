<template>
  <v-container fluid class="login">
    <v-layout row fill-height align-center class="login-card elevation-10">
      <v-flex offset-sm6 class="login-form">
          <h1>ASIAN FOOD</h1>
          <h4>Food asian and Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
          <v-form class="mt-3 mb-3">
            <v-alert
              v-model="alert"
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
              dark
              large
              class="elevation-8"
              right>sign in</v-btn>
          </v-form>
          <h5>Don't have an account? <span class="orange--text router-btn" @click="goRegister()">SIGN UP</span></h5>
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
    }
  },
  methods:{
    goRegister(){
      this.$router.push({name: 'register'})
    },
    async login(){
      try{
        const response = await Auth.login({
          email: this.email,
          password: this.password
        });
        console.log(response);
        if(response.data.token){
          this.$store.dispatch('setUserToken', response.data.token);
          this.$router.push({name: 'home'});
        }else{
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
