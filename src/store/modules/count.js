/****
 * Count state
 * */
const state = {
  count: 0
}

const mutations = {
/****
* Sets Count
* */
  INCREMENT: (state) => {
    state.count++
  },

  DECREMENT: (state) => {
    state.count--
  }
}

const getters = {
/****
 * get Count state
 * */
  getCount: state => state.count

}

const actions = {
    /****
    * dispatch methods
    * */
  increment: ({ commit }) => commit('INCREMENT'),
  decrement: ({ commit }) => commit('DECREMENT')
}

export default {
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
}
