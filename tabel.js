var ctx = document .getElementById('my-chart').getContext('2d');

var myChart = new Chart(ctx,{
    type : 'bar',
    data: {
        labels: ['1 jan','5 jan','10 jan','15 jan','25 jan','30 jan'],
    datasets: [{
        data: [76,95,55,80,80,60],
        backgroundColor: [
            '#A3B1F5',
            '#4763EB',
            '#A3B1F5',
            '#A3B1F5',
            '#A3B1F5',
            '#A3B1F5'
        ],
        borderColor: [
            '#A3B1F5',
            '#4763EB',
            '#A3B1F5',
            '#A3B1F5',
            '#A3B1F5',
            '#A3B1F5'
        ],
        borderWidth: 1
    }]
    },
})