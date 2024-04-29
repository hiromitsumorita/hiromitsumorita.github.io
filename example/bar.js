
//const date = ['8/1', '8/2', '8/3', '8/4', '8/5', '8/6', '8/7'];

var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
type: 'bar',
data: {
  labels: date,
  datasets: [
    {
      label: '1st',
      data: [62, 65, 93, 85, 51, 66, 47],
      backgroundColor: "rgba(219,39,91,0.5)"
    },{
      label: '2nd',
      data: [55, 45, 73, 75, 41, 45, 58],
      backgroundColor: "rgba(130,201,169,0.5)"
    },{
      label: '3rd',
      data: [33, 45, 62, 55, 31, 45, 38],
      backgroundColor: "rgba(255,183,76,0.5)"
    }
  ]
},
options: {
  title: {
    display: true,
    text: '軸受振動レベル'
  },
  scales: {
    yAxes: [{
      ticks: {
        suggestedMax: 100,
        suggestedMin: 0,
        stepSize: 10,
        callback: function(value, index, values){
          return  value +  ' m/s^2'
        }
      }
    }]
  },
}
});