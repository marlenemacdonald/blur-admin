'use strict';

var WaveChart = angular.module('WaveChart', ["highcharts-ng"]);


var waveData = {
        waimea: "assets/wave-waimea.json",
        pauwela: "assets/wave-pauwela.json",
        hanalei: "assets/wave-hanalei.json"
    }



WaveChart.factory('waveService', function($http) {
    
        var getWaveDataFunction = function(beach){

            $http.get(waveData[beach])
              .success(function(data) {
                console.log('yay it works');
                return data;

              var Time = [];
                for (var i = 0; i < data.length; i++) {
                    Time.push(data[i].Time);   
                }

                var Output = [];
                for (var i = 0; i < data.length; i++) {
                    Output.push(data[i].Output);
                }
                //console.log(Time);
                //console.log(Output);

            });
        }

        return {
            getWaveData: getWaveDataFunction
        };
   
});      

WaveChart.controller('chartCtrl', function ($scope, waveService, $state) {
    
        
        var currentBeach = $state.current.title.toLowerCase();
        $scope.data = waveService.getWaveData(currentBeach);

        console.log($scope.data);


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
                xAxis: [{
                name: "Time",   
                categories: ['00:09', '00:39', '01:09', '01:39']
            }],
            series: [{
                name: "Wave Height",
                data: [4.82, 4.63, 5.52, 5.96]
            }]
        }
});

