<template>
<Header/>
<h1>Hello User Welcome to our add a Restaurant page</h1>
<form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name" />
    <input type="text" name="localisation" placeholder="Enter localisation" v-model="Restaurant.localisation" />
    <input type="text" name="contact" placeholder="Enter contact" v-model="Restaurant.contact" />
    <button type="button" v-on:click="addRestaurant" >Add new Restaurant</button>
</form>
</template>
<script>


import Header from './Header.vue'
import axios from'axios'
export default{

 name:'AddPage',
 components:{
     Header

},
data(){
return {
        Restaurant:{
            name:'',
            localisation:'',
            contact:''

        }

}

},
methods: {
   async addRestaurant(){
        console.warn(this.Restaurant);
        const result =await axios.post("https://3ff9-197-2-24-57.ngrok-free.app/restaurant",{
            name:this.Restaurant.name,
            localisation:this.Restaurant.localisation,
            contact:this.Restaurant.contact,
        })
    
          
        if(result.status==201)
        {
            this.$router.push({name:'HomePage'})

        }
        console.warn("result",result)
    
        }



},
mounted()//automaticly called to load the page
{
let user=localStorage.getItem('user-info');
if(!user){
    this.$router.push({name:'SignUp'})
}

}


}
</script>