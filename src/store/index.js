import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function randomId() {
  return Math.random()
    .toString()
    .substr(2, 10)
}

export default new Vuex.Store({
  state: {
    loading: true,
    list: [],
    newTodo: '',
  },
  getters: {
    loading: (state) => state.loading,
    list: (state) => state.list,
    newTodo: (state) => state.newTodo,
  },
  mutations: {
    SET_LOADING(state, flag) {
      state.loading = flag
    },
    SET_LIST(state, list) {
      state.list = list
    },
    SET_NEW_TODO(state, newTodo) {
      state.newTodo = newTodo
    },
    CLEAR_NEW_TODO(state) {
      state.newTodo = ''
    },
    ADD_TODO(state, todo) {
      state.list = [todo, ...state.list]
    },
    REMOVE_TODO(state, todo) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    SET_COMPLETE_TODO(state, todo) {
      const index = state.list.indexOf(todo)
      state.list[index].completed = !state.list[index].completed
    },
  },
  actions: {
    loadList({ commit }) {
      commit('SET_LOADING', true)
      axios
        .get('http://127.0.0.1:3000/list')
        .then((r) => r.data)
        .then((list) => {
          commit('SET_LIST', list)
          commit('SET_LOADING', false)
        })
    },
    setNewTodo({ commit }, newTodo) {
      commit('SET_NEW_TODO', newTodo)
    },
    clearNewTodo({ commit }) {
      commit('CLEAR_NEW_TODO')
    },
    addTodo({ commit, state }) {
      if (!state.newTodo) {
        return
      }
      const todo = {
        content: state.newTodo,
        completed: false,
        id: randomId(),
      }
      axios.post('http://127.0.0.1:3000/list', todo).then((_) => {
        commit('ADD_TODO', todo)
      })
    },
    removeTodo({ commit }, todo) {
      axios.delete(`http://127.0.0.1:3000/list/${todo.id}`).then((_) => {
        commit('REMOVE_TODO', todo)
      })
    },
    completeTodo({ commit }, todo) {
      todo.completed = !todo.completed
      axios.put(`http://127.0.0.1:3000/list/${todo.id}`, todo).then((_) => {
        console.log('update success!')
      })
    },
  },
})
