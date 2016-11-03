
var WaveChart = angular.module('WaveChart', ["highcharts-ng"]);


var waveData = {
        waimea: "assets/wave-waimea.json",
        pauwela: "assets/wave-pauwela.json",
        hanalei: "assets/wave-hanalei.json"
    }
  

WaveChart.factory('waveService', function($http, $q) {

    var getWaveDataFunction = function(beach){
        
        var defer = $q.defer();

        $http.get(waveData[beach])
          .success(function(data) {

            var Time = [];
            for (var i = 0; i < data.length; i++) {
                Time.push(data[i].Time);   
            }

            var Output = [];
            for (var i = 0; i < data.length; i++) {
                Output.push(data[i].Output);
            }
        
            defer.resolve({ time: Time, output: Output});

        });
        
        return defer.promise;
    }

    return {
        getWaveData: getWaveDataFunction
    };
});      

WaveChart.controller('chartCtrl', function ($scope, waveService, $state) {


    var currentBeach = $state.current.title.toLowerCase();

    waveService.getWaveData(currentBeach)
        .then(function(waveData){
            $scope.waveData = waveData;

             $scope.chartConfig = {
                    title: {
                        text: 'Wave Height Observations'
                    },
                    subtitle: {
                        text: 'according to the PacIOOS'
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
                                linearGradient: { x1: 0, y1: 0},
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]],
                                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                ]
                            },
                            marker: {
                                enabled: true
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
                    name: "Time", 
                    categories: waveData.time  
                   
                },
                    yAxis: {
                        title: {
                            text: 'Wave Height'
                        },
                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        }
                    },
                    tooltip: {
                        crosshairs: true,
                        shared: true
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                radius: 4,
                                lineColor: '#666666',
                                lineWidth: 1
                            }
                        }
                    },
                    series: [{
                        name: 'Wave Height',
                        marker: {
                            symbol: 'square'
                        },
                        data: waveData.output
                       
                    }]
                }

        });
          
});

