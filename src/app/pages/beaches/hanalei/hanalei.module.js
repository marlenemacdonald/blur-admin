
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.beaches.hanalei', [])
    .config(routeConfig)                          
  
  function routeConfig($stateProvider) {
    $stateProvider
        .state('beaches.hanalei', {
          url: '/hanalei',
          templateUrl: 'app/pages/beaches/view-beaches.html',
          controller: 'hanaleiCtrl',
          controllerAs: 'ctrl',
          title: 'Hanalei',
          sidebarMeta: {
            order: 200,
          },
        });  
  }

})();

