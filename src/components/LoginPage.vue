<template>
    <img class="logo" src="../assets/resto.logo.jpg"/>
    <h1>Login</h1>
    
    <div class="login"> 
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter password"/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to='/sign-up'>SignUp</router-link>
        </p>    
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
        async login() {// asynchronous to handle promises and operations
                    if (!this.email || !this.password) {
                    alert("Please enter both email and password.");
                    return;
            }

            let result = await axios.get(//asynchronous HTTP client for making HTTP requests
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({ name: 'HomePage' });//redirects the user to the homepage
            } else {
                console.warn(result);
            }
        }
    },
    mounted() {//ready for interaction
        let user = localStorage.getItem('user-info');
        if (user) {
            console.log("hello");
            this.$router.push({ name: 'HomePage' });
        }
    }
};
</script>
