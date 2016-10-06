/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.beaches.waimea')
    .controller('waimeaCtrl', waimeaCtrl);

  /** @ngInject */
  function waimeaCtrl($scope, $http) {

    $http.get('assets/wave-waimea.json')
    .success(function(response) {$scope.times = response;});

    $scope.imglnk = "assets/img/waimea.jpg";
    $scope.imgalt = "Waimea";
    $scope.imgheight = "90%";
    $scope.imgwidth = "90%";
    $scope.beach = "Waimea";
    $scope.chartlnk = 'pages/charts/charts.html';
      
  }
})();