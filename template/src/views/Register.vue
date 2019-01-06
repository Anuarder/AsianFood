<template>
  <v-container fluid class="login">
    <v-layout row fill-height align-center class="login-card elevation-10">
      <v-flex offset-sm6 class="login-form">
          <h1>ASIAN FOOD</h1>
          <h4>Register new user</h4>
          <v-form 
            ref="form"
            v-model="valid"
            class="mt-3 mb-3">
            <v-alert
              v-model="alert"
              dismissible
              type="error">
              {{error_message}}
            </v-alert>
            <v-text-field
              class="login-input"
              :rules="usernameRules"
              v-model="username"
              required
              label="Username"></v-text-field>
            <v-text-field
              class="login-input"
              label="Email"
              v-model="email"
              :rules="emailRules"
              required
              type="email"></v-text-field>
            <v-text-field
              class="login-input"
              label="Password"
              v-model="password"
              :rules="passwordRules"
              required
              type="password"></v-text-field>
            <v-text-field
              class="login-input"
              label="Confirm password"
              v-model="confirmPassword"
              :rules="confirmPasswordRules"
              required
              type="password"></v-text-field>
            <v-btn
              @click="validate()"
              color="orange"
              dark
              large
              class="elevation-8"
              right>sign up</v-btn>
          </v-form>
          <h5>Have a account? <span class="orange--text router-btn" @click="goLogin()">SIGN IN</span></h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Auth from '@/services/Auth'
export default {
  data(){
    return{
      valid: true,
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be greater than 6 characters'
      ],      
      confirmPassword: '',
      confirmPasswordRules: [
        v => !!v || 'Confirmation password is required',
        v => (v == this.password) || 'Password do not match'
      ],
      error_message: '',
      alert: false,
    }
  },
  methods:{
    validate () {
      if (this.$refs.form.validate()) {
        this.register();
      }else{
        console.log("validate")
      }
    },
    goLogin(){
      this.$router.push({name: 'login'})
    },
    async register(){
      try{
        const response = await Auth.register({
          username: this.username,
          email: this.email,
          password: this.password
        });
        console.log(response);
        if(response.data.message){
          this.$router.push({name: 'login'});
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
