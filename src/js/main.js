var Vue = require('vue')

var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);


// register chart component



new Vue({
	el: '#app',
	data: {
		selected: 'Pie',
		options: [
			{ text: 'Pie Chart', value: 'Pie' },
			{ text: 'Bar Chart', value: 'Bar' },
			{ text: 'Line Chart', value: 'Line' }
		]
	},
	components: {
		chart: {
			template: '#chart-template'
		}
	},
	methods: {
	addChart: function() {
		var x = document.getElementById("chart-type-select").value;
		console.log(x);
		var b = this.selected;

		console.log(b);
		if ( b == 'Pie' ) {

		}
	},
}
})


// Create the chart Pie
Highcharts.chart('chart', {
		 chart: {
						plotBackgroundColor: null,
						plotBorderWidth: null,
						plotShadow: false,
						type: 'pie'
				},
				legend: {
						align: 'right',
						verticalAlign: 'top',
						layout: 'vertical',
						x: 0,
						y: 50
				},
				title: {
						text: 'Points scored'
				},
				tooltip: {
						pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				plotOptions: {
						pie: {
								allowPointSelect: true,
								cursor: 'pointer',
								dataLabels: {
										enabled: false
								},
								showInLegend: true
						}
				},
				series: [{
						name: 'Brands',
						colorByPoint: true,
						data: [{
								name: 'Team 1',
								y: 21.8
						}, {
								name: 'Team 2',
								y: 32.7
						}, {
								name: 'Team 3',
								y: 10.9
						}, {
								name: 'Team 4',
								y: 34.5
						}]
				}]
		});




// Create the chart Bar
if (document.getElementById('bar')) {

Highcharts.chart('bar', {
		chart: {
				type: 'bar'
		},
		title: {
				text: 'Points scored'
		},
		xAxis: {
				categories: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
				title: {
						text: null
				}
		},
		yAxis: {
				min: 0,
				max: 100,
				labels: {
					 overflow: 'justify'
				}
		},
		tooltip: {
				valueSuffix: ' points'
		},
		plotOptions: {
				bar: {
						dataLabels: {
								enabled: false
						}
				}
		},
		legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: 0,
				y: 50,
				symbolWidth: 20,
				symbolRadius: 0,
				squareSymbol: false,
		},
		credits: {
				enabled: false
		},
		series: [{
				name: 'Period 1',
				data: [24, 30, 10, 32]
		}, {
				name: 'Period 2',
				data: [80, 24, 30, 60]
		}]
});

}



// Create the chart Bar
Highcharts.chart('line', {

		title: {
				text: 'Points scored'
		},

		yAxis: {
				title: {
						text: ''
				}
		},

		xAxis: {
				categories: ['Team 1', 'Team 2', 'Team 3', 'Team 4']
		},

		legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				y: 50
		},

		plotOptions: {
				series: {
						
				}
		},

		series: [{
				name: 'Period 1',
				data: [90, 25, 35, 60]
		}, {
				name: 'Period 2',
				data: [22, 30, 15, 30]
		}]

});