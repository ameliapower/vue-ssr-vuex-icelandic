import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import topics from './modules/topics'
import flights from './modules/flights'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    count: count,
    topics: topics,
    flights: flights
  }
})

export default store
