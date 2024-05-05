<template>
<div class='nav'>
<router-link to="/">Home</router-link>
<router-link to="/Add">Add Restaurant</router-link>
<a v-on:click="logout" href="#">logout</a>
</div>
</template>
<script>
export default {
    name:'HeaderTitle',
    methods: {
        logout(){

            localStorage.clear();
            this.$router.push({name:'LoginPage'})
        }


    }
}
</script>
<style>
.nav{
    background-color:#333;
    overflow:hidden;

}


.nav a {
    float: left;
    color: papayawhip;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
background:#ddd;
color:#333

}
</style> 