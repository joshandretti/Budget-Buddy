'use strict';
new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Bills", "Entertainment", "Savings"],
    datasets: [
      {
        label: "Budget Buddy",
        backgroundColor: ["#820d0b","#093286", "#dfb10f"],
        data: [50,30,20]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: ''
    }
  }
});
