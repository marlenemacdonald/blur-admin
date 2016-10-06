/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.beaches', [
    'BlurAdmin.pages.beaches.waimea',
    'BlurAdmin.pages.beaches.pauwela',
    'BlurAdmin.pages.beaches.hanalei',
  ])
      .config(routeConfig);

  /** @ngInject */
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
