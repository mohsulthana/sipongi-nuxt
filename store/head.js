export const state = () => ({
    inner: null,
  })
  
  export const mutations = {   
      innerHeader(state, data) {
        state.inner = data
      },
  }