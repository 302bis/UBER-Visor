(function() {
  'use strict';

  angular
    .module('booot')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $stateProvider
      .state('homepyme', {
        url: '/homepyme',
        templateUrl: 'app/home/home.html'
      });

    $stateProvider
      .state('solicitud', {
          url: '/solicitud',
          templateUrl: 'app/solicitud/solicitud.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
