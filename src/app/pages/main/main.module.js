/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
    'use strict';
    
    angular.module('BlurAdmin.pages.main', [])
        .config(routeConfig)
        .filter('floor', floor);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('main', {
            url: '/main',
            templateUrl: 'app/pages/main/main.html',
            title: 'Main',
            controller: 'MainPageCtrl',
            resolve: {
              // top10CoinMarketData: function(MarketCapService) {
              //   return MarketCapService.getTop10Crypto();
              // },
              coinMarketData: function(MarketCapService) {
                return MarketCapService.getCrypto();
              }
            },
            sidebarMeta: {
              icon: 'ion-android-home',
              order: 0,
            },
          });
    }
  
    function floor() {
      return function(input) {
          return Math.floor(input);
      };
    }
  })();
  