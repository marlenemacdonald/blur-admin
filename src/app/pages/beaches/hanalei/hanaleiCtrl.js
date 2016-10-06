/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';


  angular.module('BlurAdmin.pages.beaches.hanalei')
    .controller('hanaleiCtrl', hanaleiCtrl);

  /** @ngInject */
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

