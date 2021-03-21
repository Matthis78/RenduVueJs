import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    blogs: [{
      name: 'name',
      title: 'this.metaTitle',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
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