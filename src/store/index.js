import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storecount:0,
    todos: [
      { id: 1, text: 'aaa.', done: true },
      { id: 2, text: '.b.', done: false }
    ]
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters,aa,cc) {
      return getters.doneTodos.length
    }
  },
  mutations: {
    changeStoreCount(state,payload,cc,dd){
      return new Promise((res,rej)=>{
        console.log(cc,dd)
        state.storecount++
        state.storecount+=payload
        res()
      })
    },
    increment (state) {
      // 变更状态
      state.storecount++
    }
  },
  actions: {
    increment (context,bb,cc) {
      console.log(context)
      return new Promise((res,rej)=>{
        context.state.storecount++
        res(bb)
      })
      // context.commit('increment')
    }
  },
  modules: {
  }
})
