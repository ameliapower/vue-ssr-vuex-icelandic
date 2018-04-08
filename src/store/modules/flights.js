import request from 'axios'
import { SET_FLIGHTS_LIST } from '../mutation-types'

const state = {
  flightsList: []
  // flightDates: []
}

const mutations = {
  /**
  * Get Flights
  * @param state
  * @param data
  */
  [SET_FLIGHTS_LIST] (state, data) {
    state.flightsList = data
  }

  /**
  * Flight Dates
  * @param state
  * @param data
  */
  // [SET_FLIGHT_DATES] (state, data) {
  //   state.flightDates = data
  // }
}

// flightDate () {
//         this.flightsList.filter((day) => day === day.date)
//       }

const actions = {
  /**
  * Get Flights
  * @param commit
  * @param state
  */
  getFlights: ({ commit, state }) => {
    return request.get('http://apis.is/flight?language=en&type=arrivals').then((response) => {
      // console.log(response.data.results)
      if (response.statusText === 'OK') {
        commit(SET_FLIGHTS_LIST, response.data.results)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  /**
  * Get Flights
  * @param commit
  * @param state
  */
  // getFlightDates: ({commit, state}) => {
  //   return request.get('http://apis.is/flight?language=en&type=arrivals').then((response) => {
  //     console.log(response.data.results)
  //     if (response.statusText === 'OK') {
  //       commit(SET_FLIGHT_DATES, response.data.results.date)
  //     }
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }
}

const getters = {
  /**
  * Get Flight Dates
  * @param state
  */
  getFlights: state => state.flightsList

  /**
  * Total Flights
  * @param state
  */
  // getFlightDates: state => state.flightDates
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
