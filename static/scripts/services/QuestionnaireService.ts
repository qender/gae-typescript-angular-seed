/// <reference path='../References.ts' />
module HigherMe.Services {
    'use strict';
    export class QuestionnaireService extends BaseRestService<Models.Question> {
        // @ngInject
        constructor(Restangular) {
            super(Restangular, 'question');
        }

        public getNextQuestion(order:number, questionnaire:Models.QuestionnaireType):restangular.IPromise<Models.Question> {
            return this.Restangular.one('question').one('next').get({'order': order, 'questionnaire': Models.QuestionnaireType[questionnaire]});
        }

    }

    HigherMe.App.Services.service("QuestionnaireService", QuestionnaireService);
}