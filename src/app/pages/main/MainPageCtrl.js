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
    
    //formdata constructor
    function formData(coinMarketData, smartTablePageSize, selectedCurrency){
      this.coinMarketData=coinMarketData;
      this.smartTablePageSize=smartTablePageSize;
      this.selectedCurrency=selectedCurrency;
    }
    $scope.currencies = ['Dollar', 'EUR', 'INR'];
    $scope.formData=new formData(coinMarketData, 25, $scope.currencies[0]);
    
    $scope.dataColor = function(value){
      if(value<0){
        return {"color":"brown"};
      }
      else return {"color":"green"};
    }
  }
})();
