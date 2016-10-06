/**
 * @author a.demeshko
 * created on 12.21.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.beaches.pauwela', [])
    .config(routeConfig)
    .config(function(){
      $.jstree.defaults.core.themes.url = true;
      $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('beaches.pauwela', {
          url: '/pauwela',
          templateUrl: 'app/pages/beaches/view-beaches.html',
          controller: 'pauwelaCtrl',
          controllerAs: 'ctrl',
          title: 'Pauwela',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
