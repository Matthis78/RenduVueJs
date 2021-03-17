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
      img: '',
      id: '0',
    }]
  },
  mutations: {
    createNewPage(state, post) {
      state.blogs.push(post);
    },
    updatePost(state, post) {
      for (let i = 0; i < state.blogs.length; i++) {
        if (state.blogs[i].id === post.id) {
          state.blogs[i] = post;
        }
      }
      state.blogs[post.id] = post;
    },

    //Delete


    removeItems(state, post) {
      state.blogs.splice(state.blogs.indexOf(post), 1)

    }

    // actions: {},
    // modules: {}
  }
})