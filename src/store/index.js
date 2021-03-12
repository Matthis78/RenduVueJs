import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    blogs: []
  },
  mutations: {
    createNewPage(state, post) {
      state.blogs.push(post);
    },
    // actions: {},
    // modules: {}
  }
})