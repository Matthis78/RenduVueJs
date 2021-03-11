import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    blogs: []
  },
  mutations: {
    createNewPage(state, Title,metaTitle,metaDescription,Corps) {
      state.metaPost = Title
      state.metaPost = metaTitle
      state.metaPost = metaDescription
      state.metaPost = Corps     
 
    },
    // actions: {},
    // modules: {}
  }
})