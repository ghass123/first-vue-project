<template>
  <body class="home">
    <div>
      <Header />
      <h1>Hello {{ name }}, Welcome to our HomePage</h1>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Localisation</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in restaurant" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.localisation }}</td>
              <td>{{ item.contact }}</td>
              <td>
                <router-link :to="'/Update/'+ item.id">
                  <button class="action-btn">Update</button>
                </router-link>
                <button @click="deleteRestaurant(item.id)" class="action-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      restaurant: []
    }
  },
  components: {
    Header
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("https://3ff9-197-2-24-57.ngrok-free.app/restaurant/" + id);
      console.warn(result)
      if (result.status == 200) {
        this.loadData()
      }
    },
    async loadData() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({ name: 'SignUp' })
        return;
      }
      this.name = JSON.parse(user).name;

      let result = await axios.get("http://localhost:3000/restaurant");
      console.warn(result);
      this.restaurant = result.data;
    }
  },
  async mounted() {
    await this.loadData();
  }
}
</script>

<style>
  body.home{
    margin: 0;
    padding: 0;
    background-image: url('../assets/restaurant background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }
  
  .table-container {
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    text-align: left;
  }
  
  th {
    background-color: #36454F;
    color: white;
  }
  
  td {
    border-bottom: 1px solid #ddd;
  }
  
  .action-btn {
    border-top-left-radius: 10px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 5px;
    padding: 10px 20px;
    background-color: #36454F;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .action-btn:hover {
    background-color: #0056b3;
  }
  h1{
    background-color: light black;
    color: white;
  }

  
  </style>
  