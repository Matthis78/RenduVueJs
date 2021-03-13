import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    blogs: [{
      name: 'name',
      title: 'this.metaTitle',
      desc: 'metaDesc',
      content: 'metaPost',
      img: '../assets/logo.png'
    }]
  },
  mutations: {
    createNewPage(state, post) {
      state.blogs.push(post);
    },
    // actions: {},
    // modules: {}
  }
})