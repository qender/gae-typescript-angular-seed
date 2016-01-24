/// <reference path='../References.ts' />
module HigherMe {
    'use strict';

    export class App {
        public static Controllers:ng.IModule = angular.module(Constants.APP_CONTROLLERS_MODULE, []);
        public static Models:ng.IModule = angular.module(Constants.APP_MODELS_MODULE, []);
        public static Directives:ng.IModule = angular.module(Constants.APP_DIRECTIVES_MODULE, []);
        public static Services:ng.IModule = angular.module(Constants.APP_DIRECTIVES_MODULE, []);
        public static Filters:ng.IModule = angular.module(Constants.APP_FILTERS_MODULE, []);
        public static Partials:ng.IModule = angular.module(Constants.APP_PARTIALS_MODULE, []);

        public static Module:ng.IModule = angular.module(
            Constants.APP_MODULE,
            [
                Constants.APP_CONTROLLERS_MODULE,
                Constants.APP_MODELS_MODULE,
                Constants.APP_DIRECTIVES_MODULE,
                Constants.APP_SERVICES_MODULE,
                Constants.APP_FILTERS_MODULE,
                Constants.APP_PARTIALS_MODULE,
                'ui.router',
                'ui.bootstrap',
                'restangular',
                'ngSanitize',
                'ngAnimate'
            ]
        );

        public static configure():void {
            Config.UIRouterConfig.configure(this.Module);
            Config.RestangularConfig.configure(this.Module);
        }

        public static run():void {
            angular.bootstrap(document, [Constants.APP_MODULE]);
        }
    }
}