// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('line-chart').getContext('2d');
    const ctx2 = document.getElementById('bar-chart').getContext('2d');
  
    // Line Chart
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Revenue',
            data: [500, 600, 800, 750, 900, 1200, 1000, 1100],
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Sales',
            data: [400, 550, 700, 670, 850, 1100, 950, 1000],
            borderColor: 'lightblue',
            fill: false,
          },
        ],
      },
    });
  
    // Bar Chart
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
          {
            label: 'Sales',
            data: [30, 50, 70, 90, 80, 60],
            backgroundColor: 'blue',
          },
          {
            label: 'Revenue',
            data: [50, 70, 90, 100, 90, 70],
            backgroundColor: 'lightblue',
          },
        ],
      },
    });
  });
  