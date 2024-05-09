<template>
    <img class="logo" src="../assets/resto.logo.jpg"/>
    <h1>SignUp</h1>
    
    <div class="register"> 
      <input type="text" v-model="name" placeholder="Enter Name"/>
      <input type="text" v-model="email" placeholder="Enter Email"/>
      <input type="password" v-model="password" placeholder="Enter password"/>
      <button v-on:click="SignUp">Sign UP</button>
      
      <p>
        <router-link to="/Login">Login</router-link>
      </p>    
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
        
        if (!this.isValidEmail()) {
          alert("Please enter a valid email address.")
          return;
        }
  
        let result = await axios.post("http://localhost:3000/users", {
          email: this.email,
          password: this.password,
          name: this.name
        });
  
        console.warn(result);
        if (result.status == 201) {
          //localStorage.setItem("user-info", JSON.stringify(result.data))
          this.$router.push({ name: 'LoginPage' })
          console.warn("hello")
        }
      },
      isValidEmail() {
        
        return this.email.includes('@');
      }
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if (user) {
        this.$router.push({ name: 'LoginPage' })
      }
    }
  }
  </script>
  