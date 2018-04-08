<template>
<div>
  <h1>Flight Information</h1>
  <h3>Total:</h3>
  <p>{{totalFlightsNumber}}</p>
  <p>{{getFlightDates}}</p>
  <p>NUMBER: {{getNumFlightsPerAirlines}}</p>
  <p>AIRLINES: {{getFlightAirlines}}</p>
  
  <bar-chart :chart-data="dataFlightInfo" />

  <div v-for="fly in flightsList">
    <p><span><strong>Date: </strong>{{fly.date}}</span>
    <span><strong>Number: </strong>{{fly.flightNumber}}</span>
    <span><strong>Airline: </strong>{{fly.airline}}</span>
    <span><strong>From: </strong>{{fly.from}}</span>
    <span><strong>Planned Arrival: </strong>{{fly.plannedArrival}}</span>
    <span v-if="fly.realArrival"><strong>Actual Arrival: </strong>{{fly.realArrival}}</span></p>
    <span v-if="fly.status"><strong>Status: </strong>{{fly.status}}</span>
  </div>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BarChart from './BarChart'

  export default {
    components: {
      BarChart
    },

    computed: {
      ...mapGetters({
        flightsList: 'getFlights'
        // flightDates: 'getFlightDates'
      }),

      totalFlightsNumber () {
        return this.flightsList.length
      },

      getFlightDates () { // es6 set Object is unique array
        return [...(new Set(this.flightsList.map(({ date }) => date)))]
      },

      getAirlinesArray () {
        // let airlinesList = [...(new Set(this.flightsList.map(({ airline }) => airline)))]
        return this.flightsList.map((f) => {
          return f.airline
        })
      },

      getFlightDetails ({getAirlinesArray}) {
        // console.log(getAirlinesArray)
        let result = getAirlinesArray.reduce((counts, airline) => counts.set(airline, counts.get(airline) + 1 || 1), new Map())
        console.log(result)
        return result
        // result.forEach((k, v, m) => console.log(k, v))
        // return result.forEach((k, v, m) => {
        //   console.log(k, v)
        //   // return k
        // })
      },

      getNumFlightsPerAirlines ({getFlightDetails}) {
        let numbersArray = []
        getFlightDetails.forEach((k, v, m) => {
          numbersArray.push(k)
        })
        return numbersArray
      },

      getFlightAirlines ({getFlightDetails}) {
        let airlinesArray = []
        getFlightDetails.forEach((k, v, m) => {
          airlinesArray.push(v)
        })
        return airlinesArray
      },

      // ChartJS
      dataFlightInfo ({getNumFlightsPerAirlines, getFlightAirlines}) {
        console.log(getNumFlightsPerAirlines)
        console.log(getFlightAirlines)
        console.log(Array.isArray(getNumFlightsPerAirlines))

        return {
          labels: getFlightAirlines,
          datasets: [{
            backgroundColor: ['#f87979', 'red', 'blue', 'yellow', '#ccc', '#444', 'lime', 'tomato', 'seagreen', '#df21d6'],
            data: getNumFlightsPerAirlines,
            borderWidth: 1
          }]
        }
      }

    }, // computed

    asyncData ({ store }) {
      return store.dispatch('getFlights')
      // Promise.all(  // promiseAllSoftFail
        // store.dispatch('getFlightDates')
      // )
    }
  }

</script>

