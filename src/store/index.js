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
      img: '../assets/logo.png',
      id  : '0',
    }]
  },
  mutations: {
    createNewPage(state, post) {
      state.blogs.push(post);
    },
    updatePost(state, post){
      for(let i = 0; i < state.blogs.length; i++){
        if(state.blogs[i].id === post.id){
          state.blogs[i] = post;
        }
      }
      state.blogs[post.id] = post;
    },

    //Essaie pour delete


  //   removeItems(state, post){
  //     for(let i = 0; i < state.blogs.length; i++){
  //       const die = state.blogs[i].id;
  //       state.blogs[i].id.splice(die, 1)
  //       state.blogs[i] = post;

  //     }
      
  // }
    // actions: {},
    // modules: {}
  }
})