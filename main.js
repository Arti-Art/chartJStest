// Random RGB color
let r = () => Math.random() * 256 >> 0;
function rndCol() {
  let result = `rgb(${r()}, ${r()}, ${r()})`;
  console.log(`new slicer color is ${result}`);
  return result;
}

// Random number btw 2 and 15
function rndNumb() {
  result = Math.floor(Math.random() * 13) + 2;
  console.log(`new slice value is ${result}`);
  return result;
}

// CHART 1
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'number of kisses by day',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        tension: 0.2
      },
      {
        label: 'number of hugs by day',
        data: [14, 2, 5, 8, 7, 22],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'yellow',
        tension: 0.1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


// SECOND CHART
var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'number of kisses by day',
        data: [12, 9, 3, 5, 7, 3],
        borderWidth: 1,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'green', 'purple', 'orange'],
        hoverOffset: 30
      }
    ]
  },
  options: {
    // layout: {
    //   padding: 40
    // },
    plugins: {
      title: {
        display: true,
        text: 'The Apple Pie Chart'
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});

// UPDATE CHART
function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
      dataset.backgroundColor.push(rndCol());
  });
  chart.update();
}

let btn = document.querySelector('#myButton');
btn.addEventListener('click', () => {
  addData(myChart2, 'New Slice', rndNumb());
})