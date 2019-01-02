<template>
  <v-container>
    <v-layout>
      <v-flex sm12 class="text-sm-center">
        <h2>Login</h2>
        <v-form>
          <v-text-field
            v-model="username"
            label="User name"
            type="text"></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"></v-text-field>
            <v-btn color="primary" @click="login">Login</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    login(){
      console.log({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
