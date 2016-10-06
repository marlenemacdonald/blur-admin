var WaveChart = angular.module('WaveChart', ["highcharts-ng"]);

WaveChart.controller('chartCtrl', ['$scope', '$http',
  function($scope,$http) 
  {

		$http.get("assets/wave-waimea.json")
		  .success(function(data) {
		  	console.log(data);
		
		  var Time = [];
		    for (var i = 0; i < data.length; i++) {
		        Time.push(data[i].Time);   
		    }

		    var Output = [];
		    for (var i = 0; i < data.length; i++) {
		        Output.push(data[i].Output);
			}
			console.log(Time);
			console.log(Output);

		});
			

		$scope.chartConfig = {
			title: {
				text: 'Wave Height Observations'
			},
			options: {
				chart: {
					type: 'spline'
				},
				plotOptions: {
					spline: {
						lineWidth: 2,
						states: {
							hover: {
								lineWidth: 3
							}
						},
						marker: {
							enabled: false
						}
					},
					area: {
					fillColor: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
						stops: [
							[0, Highcharts.getOptions().colors[0]],
							[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
						]
					},
					marker: {
						enabled: false
					},
					lineWidth: 1,
					states: {
						hover: {
							lineWidth: 2
						}
					},
					threshold: null
					}
				}
			},
			xAxis: {
            categories: Time
        },
        series: [{
           data: Output
        }]
    }

		
  }
]);