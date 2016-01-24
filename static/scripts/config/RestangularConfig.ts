/// <reference path='../References.ts' />
module HigherMe.Config {
    'use strict';

    export class RestangularConfig {
        public static configure(mod:ng.IModule) {
            mod.config(function(RestangularProvider:restangular.IProvider) {
                RestangularProvider.setBaseUrl(Constants.API_BASE_URL);
                RestangularProvider.setDefaultHeaders({'Accept': 'application/json'});
            });

            mod.run(function(Restangular:restangular.IProvider,
                $rootScope:ng.IRootScopeService,
                $state:ng.ui.IStateService) {

                $rootScope['Constants'] = Constants;
            });

        }
    }
}