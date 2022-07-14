export default {
  namespaced: true,
  state() {
    return {
      isShow: true,
      show: true
    };
  },
  actions: {},
  mutations: {
    changeState(state) {
      state.isShow = false;
    },
    hideState(state) {
      state.isShow = true
    },
    changeShow(state) {
      state.show = false
    },
    changeHide(state) {
      state.show = true
    }
  },
}