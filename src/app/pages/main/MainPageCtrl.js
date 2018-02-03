/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.main')
      .controller('MainPageCtrl', MainPageCtrl);

  /** @ngInject */
  function MainPageCtrl($scope, $filter, editableOptions, editableThemes, coinMarketData) {
    //$scope.top10CoinMarketData = top10CoinMarketData;
    $scope.coinMarketData = coinMarketData;

    $scope.dataColor = function(value){
      if(value<0){
        return {"color":"brown"};
      }
      else return {"color":"green"};
    }

    $scope.smartTablePageSize = 10;
  }
})();
