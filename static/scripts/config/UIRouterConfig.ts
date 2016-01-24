/// <reference path='../References.ts' />
module HigherMe.Config {
    'use strict';

    export class UIRouterConfig {
        public static configure(mod:ng.IModule) {
            mod.config(function($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
                $urlRouterProvider.when("", "/home");
                $urlRouterProvider.otherwise("/home");

                $stateProvider
                .state("home", {
                        url: "/",
                        templateUrl: "partials/home/home.html",
                        controller: Controllers.HomeController
                    })

            });

            mod.run(function($rootScope:ng.IRootScopeService,
                             $state:ng.ui.IStateService,
                             $stateParams:ng.ui.IStateParamsService) {
                $rootScope['$state'] = $state;

            });

        }
    }
}