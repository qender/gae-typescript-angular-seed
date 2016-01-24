/// <reference path='../References.ts' />
module HigherMe.Config {
    'use strict';

    export class UIRouterConfig {
        public static configure(mod:ng.IModule) {
            mod.config(function($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
                // If the url is ever the 1st param, then redirect to the 2nd param
                $urlRouterProvider.when("", "/");

                // Redirect invalid URLs
                $urlRouterProvider.otherwise("/");

                $stateProvider
                .state("home", {
                        url: "/",
                        templateUrl: "../partials/home/home.html",
                        controller: Controllers.HomeController
                    })

                .state("test", {
                        url: "/test",
                        templateUrl: "../partials/home/test.html"
                    })

            });

            mod.run(function($rootScope:ng.IRootScopeService,
                             $state:ng.ui.IStateService,
                             $stateParams:ng.ui.IStateParamsService) {
                $rootScope['$state'] = $state;

                UIRouterConfig.trackEvents($rootScope, $state, $stateParams);

            });

        }

        private static trackEvents($rootScope, $state, $stateParams) {
            $rootScope.$on('$stateChangeError',
                function (event, toState, toParams, fromState, fromParams, error) {
                    console.error("Error changing state from '" +
                        fromState.name + "' to '" + toState.name + ": " + JSON.stringify(error, ["message", "name"]));
                });

            $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
                console.log('State not found: ' + unfoundState.name);
            });

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                console.log('State changed started to ' + toState.name + ', params=' + JSON.stringify(toParams));
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
              console.log('State changed succeeded to ' + toState.name + ', params=' + JSON.stringify(toParams));
            });
        }
    }
}