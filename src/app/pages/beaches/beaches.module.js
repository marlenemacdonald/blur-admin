
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.beaches', [
    'BlurAdmin.pages.beaches.waimea',
    'BlurAdmin.pages.beaches.pauwela',
    'BlurAdmin.pages.beaches.hanalei',
  ])
      .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider
        .state('beaches', {
          url: '/beaches',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Beaches',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
  }

})();
