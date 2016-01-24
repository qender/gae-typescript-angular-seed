/// <reference path='../References.ts' />
module HigherMe.Controllers {
    'use strict';

    export interface IBaseControllerScope extends ng.IScope {
        vm: BaseController;
    }

    export class BaseController {
        public constants = Constants;

        constructor($scope:IBaseControllerScope) {
            $scope.vm = this;
        }
    }
}