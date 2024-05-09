<template>
    <div>
      <h1>Login</h1>
      
      <div class="login"> 
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter password"/>
        <button @click="handleLogin">Login</button>
        
        <p>
          <router-link to='/sign-up'>SignUp</router-link>
        </p>    
      </div> 
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('https://summer-limit-fc4f.ghassenchaari55.workers.dev/login', {
            email: this.email,
            password: this.password
          });
          // Handle successful login response
          console.log(response.data);
          // Redirect the user to homepage upon successful login
          this.$router.push('/');
        } catch (error) {
          // Handle login error
          console.error(error);
        }
      }
    }
  }
  </script>
