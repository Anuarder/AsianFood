<template>
  <v-container>
    <v-layout>
      <v-flex sm12 class="text-sm-center">
        <h2>Login</h2>
        <v-alert
          v-if="error_message"
          :value="true"
          color="error"
          icon="check_circle"
          outline>
          {{error_message}}
        </v-alert>
        <v-form>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"></v-text-field>
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
import Auth from '@/services/Auth'
export default {
  data(){
    return{
      email: '',
      password: '',
      error_message: '',
    }
  },
  methods:{
    async login(){
      try{
        const response = await Auth.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('setUserToken', response.data.token);
        this.$router.push({
          name: 'home'
        })
      }catch(error){
        this.error_message = error.response.data.error;
      }
      
      // axios.post('http://localhost:8081/login', {
      //   email: this.email,
      //   password: this.password
      // }).then(res => {
      //   this.error_message = res.data.error
      //   this.user = res.data.user
      //   if(this.user){
      //     this.$router.push('/home');
      //   }
      //   console.log(res);
      // }).catch(err => console.log(err));
    }
  }
}
</script>
