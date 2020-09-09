import Vue from 'vue'
import VueRouter from 'vue-router'
//引入login组建
import Login from "../components/Login";

Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      redirect:"/login"
    },
    {
      path: "/login",
      component:Login
    }
]

const router = new VueRouter({
  routes
})

export default router
