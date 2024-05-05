<template>
<Header/>
<h1>Hello User Welcome to our Update a Restaurant Page</h1>
<form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name" />
    <input type="text" name="localisation" placeholder="Enter localisation" v-model="Restaurant.localisation" />
    <input type="text" name="contact" placeholder="Enter contact" v-model="Restaurant.contact" />
    <button type="button" v-on:click="UpdateRestaurant" >Update Restaurant</button>
</form>




</template>
<script>


import Header from './Header.vue'
import axios from 'axios'
export default{

 name:'UpdatePage',
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
methods:{

   async UpdateRestaurant(){

        const result =await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id,{
            name:this.Restaurant.name,
            localisation:this.Restaurant.localisation,
            contact:this.Restaurant.contact,
        })
    
          
        if(result.status==200)
        {
            this.$router.push({name:'HomePage'});

        }

    }


},
async mounted()//automaticly called to load the page
{
let user=localStorage.getItem('user-info');
if(!user){
    this.$router.push({name:'SignUp'})
}
const result =await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
console.warn(result)
this.Restaurant=result.data




}


}
</script>