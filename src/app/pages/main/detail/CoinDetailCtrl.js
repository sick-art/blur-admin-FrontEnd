/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.main')
    .controller('coinDetailCtrl', coinDetailCtrl);

  /** @ngInject */
  function coinDetailCtrl($scope, $stateParams) {
    $scope.symbol = $stateParams.symbol;
  }

})();
