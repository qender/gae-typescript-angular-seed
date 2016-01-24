/// <reference path='../References.ts' />
module HigherMe.Models {
    export class Question extends BaseModel {
        public questionText:string;
        public questionnaire:Models.QuestionnaireType;
        public order:number;
        public questionType:Models.QuestionType;

        public constructor(obj:Question, Restangular:restangular.IService) {
            super(obj, Restangular);
        }
    }
}