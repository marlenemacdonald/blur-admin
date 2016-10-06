


(function () {
  'use strict';

 angular.module('BlurAdmin.pages.dashboard', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.disableTheming();
 })

      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Surf Report',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
            linkUrl: 'http:google.com'
          },
        });
  }

})();



