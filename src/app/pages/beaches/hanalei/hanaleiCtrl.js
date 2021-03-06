
(function () {
  'use strict';


  angular.module('BlurAdmin.pages.beaches.hanalei')
    .controller('hanaleiCtrl', hanaleiCtrl);

  function hanaleiCtrl($scope, $http) {

    $http.get('assets/wave-hanalei.json')
    .success(function(response) {$scope.times = response;});

    $scope.imglnk = "assets/img/hanalei.jpg";
    $scope.imgalt = "Hanalei";
    $scope.imgheight = "90%";
    $scope.imgwidth = "90%";
    $scope.beach = "Hanalei";
    $scope.chartlnk = 'pages/charts/charts.html';
  }

})();

