
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.beaches.waimea', [])
    .config(routeConfig)
    .config(function(){
      $.jstree.defaults.core.themes.url = true;
      $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
    });

  
  function routeConfig($stateProvider) {
    $stateProvider
        .state('beaches.waimea', {
          url: '/waimea',
          templateUrl: 'app/pages/beaches/view-beaches.html',
          controller: 'waimeaCtrl',
          controllerAs: 'ctrl',
          title: 'Waimea',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
