'use strict';

var WeatherApp = angular.module('WeatherApp', []);

var weatherApi = {
    waimea:'http://api.openweathermap.org/data/2.5/weather?q=Waimea,at&units=imperial&callback=JSON_CALLBACK&APPID=f9dbd911bc01df1d9ce563b2ba4d3209',
    pauwela:'http://api.openweathermap.org/data/2.5/weather?q=Haiku-Pauwela,at&units=imperial&callback=JSON_CALLBACK&APPID=f9dbd911bc01df1d9ce563b2ba4d3209',
    hanalei:'http://api.openweathermap.org/data/2.5/weather?q=Hanalei,at&units=imperial&callback=JSON_CALLBACK&APPID=f9dbd911bc01df1d9ce563b2ba4d3209'
}



WeatherApp.factory('weatherService', function($http) {
    return { 
      getWeather: function(beach) {
        var weather = { temp: {}, clouds: null };
            $http.jsonp(weatherApi[beach]).success(function(data) {
            if (data) {
                if (data.main) {
                    weather.temp.current = data.main.temp;
                    weather.temp.min = data.main.temp_min;
                    weather.temp.max = data.main.temp_max;
                }
                weather.clouds = data.clouds ? data.clouds.all : undefined;
            }
        });

        return weather;
      }
    }; 
});

WeatherApp.filter('temp', function($filter) {
    return function(input, precision) {
        if (!precision) {
            precision = 1;
        }
        var numberFilter = $filter('number');
        return numberFilter(input, precision) + '\u00B0F';
    };
});

WeatherApp.controller('WeatherCtrl', function ($scope, weatherService, $state) {
    //console.log ($state);
    var currentBeach = $state.current.title.toLowerCase();
    $scope.weather = weatherService.getWeather(currentBeach);
});


WeatherApp.directive('weatherWidget', function() {
  return {
    templateUrl: 'app/pages/weather.html'
  }
})

WeatherApp.directive('weatherIcon', function() {
    return {
        restrict: 'E', replace: true,
        scope: {
            cloudiness: '@'
        },
        controller: function($scope) {
            $scope.imgurl = function() {
                var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                if ($scope.cloudiness < 20) {
                    return baseUrl + 'sunny.png';
                } else if ($scope.cloudiness < 90) {
                   return baseUrl + 'partly_cloudy.png';
                } else {
                    return baseUrl + 'cloudy.png';
                }
            };
        },
        template: '<div style="float:left"><img ng-src="{{ imgurl() }}"></div>'
    };
});
