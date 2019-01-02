<template>
  <v-container>
    <v-layout>
      <v-flex sm12 class="text-sm-center">
        <h2>Register</h2>
        <v-form>
          <v-text-field
            v-model="username"
            label="User name"
            type="text"></v-text-field>
            <v-text-field
              v-model="email"
              label="Email"
              type="email"></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"></v-text-field>
            <v-btn color="primary" @click="register">Register</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register(){
      axios.post('http://localhost:8081/register', {
        username: this.username,
        email: this.email,
        password: this.password
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>
