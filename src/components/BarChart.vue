<script>
import { Bar, mixins } from 'vue-chartjs'

export default {
  extends: Bar,

  mixins: [mixins.reactiveProp],

  mounted () {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: true
      },
      cutoutPercentage: 80
    })
  }
}
</script>