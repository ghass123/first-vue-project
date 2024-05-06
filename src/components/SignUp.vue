<template> 
    <div class="signup-container">
      <img class="logo" src="../assets/resto.logo.jpg" alt="Company Logo"/>
      <h1>SignUp</h1>
      
      <div class="register"> 
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter password"/>
        <button @click="SignUp">Sign UP</button>
      
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
      async SignUp() {
        try {
          const response = await axios.post("http://localhost:3000/users", {
            email: this.email,
            password: this.password,
            name: this.name
          });
          console.warn(response);
          if (response.status === 201) {
            // Redirect to login page after successful signup
            this.$router.push({ name: 'LoginPage' });
          }
        } catch (error) {
          console.error('Error during signup:', error);
          // Handle error response, e.g., display error message to user
        }
      }
    },
    mounted() {
      // Redirect to login page if user is already logged in
      if (localStorage.getItem('user-info')) {
        this.$router.push({ name: 'LoginPage' });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your existing styles here */
  /* Ensure your existing styles make the layout responsive */
  /* You can add media queries if necessary */
  </style>
  