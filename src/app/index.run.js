(function() {
  'use strict';

  angular
    .module('booot')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
