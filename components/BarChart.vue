<script>
  // Bar chart
  import { Bar } from 'vue-chartjs';

  export default {
    name: 'BarChart',
    extends: Bar,
    mounted () {
      this.$refs.canvas.height = 180;
      // this.$refs.canvas.style.minWidth = '500px';

      this.renderChart({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: '#575BDE',
            data: [30, 15, 45, 60, 45, 105, 150, 90, 75, 105, 135, 90],
          }
        ]},
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                min: 0,
                display: false,
                stepSize: 50,
              },
              gridLines: {
                drawBorder: false,
                showBorder: false,
              },
            }],
            xAxes: [{
              gridLines: {
                drawBorder: false,
                showBorder: false,
                display: false,
              },
              ticks: {
                fontColor: '#110f2440',
                fontFamily: 'Lato'
              }
            }]
          }
        });
    }
  }
</script>