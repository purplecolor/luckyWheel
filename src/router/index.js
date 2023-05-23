import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/HomeView.vue'
import other from '../views/other.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path:"/other",
    name:"other",
    component:other
  }
 
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title || "你好!旧时光";
  next()
})

export default router
