/// <reference path='../References.ts' />
module HigherMe.Config {
    'use strict';
    export class LocationConfig {
        public static configure(mod:ng.IModule) {
            mod.config(function($locationProvider:ng.ILocationProvider) {
                $locationProvider.html5Mode({
                    enabled: false,
                    requireBase: false
                })
            })
        }
    }
}