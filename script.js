'use strict';
new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Bills", "Misc.", "Savings"],
    datasets: [
      {
        label: "Budget Buddy",
        backgroundColor: ["#cc0033","#3496db", "#f1c40f"],
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
