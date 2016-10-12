
(function () {
  'use strict';


  angular.module('BlurAdmin.pages.beaches.pauwela')
    .controller('pauwelaCtrl', pauwelaCtrl);

 
  function pauwelaCtrl($scope, $http) {

     $http.get('assets/wave-pauwela.json')
    .success(function(response) {$scope.times = response;});

    $scope.imglnk = "assets/img/pauwela.jpg";
    $scope.imgalt = "Pauwela";
    $scope.imgheight = "90%";
    $scope.imgwidth = "90%";
    $scope.beach = "Pauwela";
    $scope.chartlnk = 'pages/charts/charts.html';

  }
})();