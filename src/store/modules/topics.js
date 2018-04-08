import request from 'axios'
// possibly move api calls to the api folder
// import { getTopicsList } from 'src/api/topics'

/****
 * Topics state
 * */
const state = {
  topics: []
}

const mutations = {
/****
 * Sets Topics List
 * */
  TOPICS_LIST: (state, topics) => {
    state.topics = topics
  }
}

const getters = {
/****
 * get Topics state
 * */
  getTopics: state => state.topics

}

const actions = {
    /****
    * fetches the topics
    * */
  getTopics: ({ commit, state }) => {
    console.log(commit)
    return request.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
      if (response.statusText === 'OK') {
        commit('TOPICS_LIST', response.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

}

export default {
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
}
