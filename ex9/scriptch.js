Highcharts.chart('container', {

    title: {
        text: 'Population Growth, 2002-2017'
    },

    subtitle: {
        text: 'Source: Des Moines Regional Research, Stats and Data Hub'
    },

    yAxis: {
        title: {
            text: '% Growth'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2002
        }
    },

    series: [{
        name: 'Des Moines Metro',
        data: [1.40, 1.50, 1.50, 2.20, 2.10, 2.00, 1.80, 1.60, 1.70, 1.50, 1.50, 1.80, 2.00, 1.70, 2.00, 1.80]
    },  {
        name: 'United States',
        data: [1.00, 0.90, 0.90, 0.90, 1.00, 1.00, 0.90, 0.90, 0.80, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.80]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});