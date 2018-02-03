/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
  'use strict';
  
  angular.module('BlurAdmin.pages.main').service('MarketCapService', function($http) {
    var service = {
      getTop10Crypto: function() {
        return $http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10', { cache: false }).then(function(resp) {
          return resp.data;
        });
      },
      
      getCrypto: function() {
        return $http.get('https://api.coinmarketcap.com/v1/ticker/', { cache: false }).then(function(resp) {
          return resp.data;
        });
      },
    }
    
    return service;
  })
})();