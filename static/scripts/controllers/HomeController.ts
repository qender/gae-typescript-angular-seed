/// <reference path='../References.ts' />
module HigherMe.Controllers {
    'use strict';

    export class HomeController extends BaseController {

        // @ngInject
        constructor($scope,
                    private QuestionnaireService:Services.QuestionnaireService) {
            super($scope);

            console.log("Hello World!");
            var _this = this;

            // Make sure there is a Question in the backend before trying to run this
            _this.QuestionnaireService.getNextQuestion(10, Models.QuestionnaireType.JOB_SEEKER).then(function(response:Models.Question) {
                console.log("response = ", response);
            });

        }
    }

    HigherMe.App.Controllers.controller("HomeController", HomeController);
}