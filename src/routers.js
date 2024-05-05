import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import{createRouter,createWebHistory}from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AddPage from './components/Add.vue'
import Update from './components/Update.vue'
const routes=[
{
    name:'HomePage',
    component:HomePage,
    path:'/'
},
{
    name:'SignUp',
    component:SignUp,
    path:'/sign-up'
},
{
    name:'LoginPage',
    component:LoginPage,
    path:'/Login'
},

{
    name:'Add',
    component:AddPage,
    path:'/Add'
},
{
    name:'Update',
    component:Update,
    path:'/Update/:id',
}
]
const router=createRouter({
    history:createWebHistory(),
    routes



})
export default router