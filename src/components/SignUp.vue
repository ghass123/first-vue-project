<template>
  <div>
    <h1>SignUp</h1>
    
    <div class="register"> 
      <input type="text" v-model="name" placeholder="Enter Name"/>
      <input type="text" v-model="email" placeholder="Enter Email"/>
      <input type="password" v-model="password" placeholder="Enter password"/>
      <button @click="handleSignup">Sign UP</button>
      
      <p>
        <router-link to="/Login">Login</router-link>
      </p>    
    </div> 
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSignup() {
      try {
        const response = await axios.post('https://summer-limit-fc4f.ghassenchaari55.workers.dev/signup', {
          email: this.email,
          password: this.password,
          name: this.name
        });
        // Handle successful signup response
        console.log(response.data);
        // Redirect the user to login page or homepage upon successful signup
        this.$router.push('/Login');
      } catch (error) {
        // Handle signup error
        console.error(error);
      }
    }
  }
}
</script>
