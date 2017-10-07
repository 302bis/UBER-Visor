(function() {
  'use strict';

  angular
    .module('booot')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1485747755941;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();




  angular
    .module('booot')
    .controller('AccordionDemoCtrl', AccordionDemoCtrl )
  
  function AccordionDemoCtrl($scope) {
    $scope.oneAtATime = true;
    $scope.status = {
          isCustomHeaderOpen: false,
          isFirstOpen: true,
          isFirstDisabled: false
    };
  }


    angular
    .module('booot')
    .controller('AccordionDemoCtrl', AccordionDemoCtrl )
  
  function AccordionDemoCtrl($scope) {
    $scope.oneAtATime = true;
    $scope.status = {
          isCustomHeaderOpen: false,
          isFirstOpen: true,
          isFirstDisabled: false
    };
  }

angular
.module('booot')
.controller('banklist', banklist )

  function banklist($scope, $http, $timeout, $interval) {
    var vm = this;

    vm.bank = {};
    vm.banks = [ // Taken from https://gist.github.com/unceus/6501985
      {name: 'Bancomer', code: ''},
      {name: 'Banorte', code: ''},
      {name: 'Bansefi', code: ''},
      {name: 'Invexbank', code: ''}
    ];
  };

    angular
    .module('booot')
    .controller('TagsInput', TagsInput);

    function TagsInput ($scope, $http) {
      $scope.tags = [];
      
      $scope.loadServices = function($query) {
        return $http.get('assets/services.json', { cache: true}).then(function(response) {
          var services = response.data;
          return services.filter(function(service) {
            return service.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
          });
        });
      };
    }

    