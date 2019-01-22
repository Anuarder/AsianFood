<template>
  <v-container fluid class="login">
    <v-layout row fill-height align-center class="login-card elevation-10 hidden-xs-only">
      <v-flex offset-sm6 class="login-form">
          <h1 class="home-link" @click="goLink('home')">ASIAN FOOD</h1>
          <h4>Register new user</h4>
          <v-form 
            ref="form"
            @submit.prevent
            v-model="valid"
            class="mt-3 mb-3">
            <v-alert
              v-model="alert"
              dismissible
              outline
              type="error"
              class="error-alert mb-3">
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
              label="Image"
              hint="Link to your avatar"
              v-model="image"></v-text-field>
            <v-text-field
              class="login-input"
              label="Password"
              :append-icon="showPassword ? 'visibility_off' : 'visibility'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              :rules="passwordRules"
              required></v-text-field>
            <v-text-field
              class="login-input"
              label="Confirm password"
              :append-icon="showPassword ? 'visibility_off' : 'visibility'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              v-model="confirmPassword"
              :rules="confirmPasswordRules"
              required></v-text-field>
            <v-btn
              @click="validate()"
              color="orange"
              dark
              large
              type="submit"
              class="elevation-8"
              right
              :loading="performingRequest">sign up</v-btn>
          </v-form>
          <h5>Have a account? <span class="orange--text router-btn" @click="goLink('login')">SIGN IN</span></h5>
      </v-flex>
    </v-layout>
    <v-layout row fill-height align-center class="hidden-sm-and-up mobile-login-card">
      <v-flex xs12>
          <h1 class="home-link" @click="goLink('home')">ASIAN FOOD</h1>
          <h4>Register new user</h4>
          <v-form 
            ref="form"
            @submit.prevent
            v-model="valid"
            class="mt-3 mb-3">
            <v-alert
              v-model="alert"
              dismissible
              outline
              type="error"
              class="error-alert mb-3">
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
              label="Image"
              hint="Link to your avatar"
              v-model="image"></v-text-field>
            <v-text-field
              class="login-input"
              label="Password"
              :append-icon="showPassword ? 'visibility_off' : 'visibility'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              :rules="passwordRules"
              required></v-text-field>
            <v-text-field
              class="login-input"
              label="Confirm password"
              :append-icon="showPassword ? 'visibility_off' : 'visibility'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              v-model="confirmPassword"
              :rules="confirmPasswordRules"
              required></v-text-field>
            <v-btn
              @click="validate()"
              color="orange"
              dark
              large
              type="submit"
              class="elevation-8"
              right
              :loading="performingRequest">sign up</v-btn>
          </v-form>
          <h5>Have a account? <span class="orange--text router-btn" @click="goLink('login')">SIGN IN</span></h5>
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
      showPassword: false,
      image: '',
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
      performingRequest: false
    }
  },
  methods:{
    validate () {
      if (this.$refs.form.validate()) {
        event.preventDefault()
        this.performingRequest = true;
        this.register();
      }else{
        console.log("validate")
      }
    },
    goLink(link){
      this.$router.push({name: link});
    },
    async register(){
      try{
        const response = await Auth.register({
          username: this.username,
          email: this.email,
          image: this.image,
          password: this.password
        });
        if(response.data.message){
          this.performingRequest = false;
          this.$router.push({name: 'login'});
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
