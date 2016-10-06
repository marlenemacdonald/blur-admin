/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';


  angular.module('BlurAdmin.pages.beaches.pauwela')
    .controller('pauwelaCtrl', pauwelaCtrl);

  /** @ngInject */
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