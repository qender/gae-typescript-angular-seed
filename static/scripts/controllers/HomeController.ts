/// <reference path='../References.ts' />
module HigherMe.Controllers {
    'use strict';

    export class HomeController extends BaseController {

        // @ngInject
        constructor($scope) {
            super($scope);

            console.log("Hello World!")

        }
    }
}