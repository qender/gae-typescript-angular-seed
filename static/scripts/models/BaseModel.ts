/// <reference path='../References.ts' />
module HigherMe.Models {
    export class BaseModel extends RestangularElement {
        public id:string;

        // @ngInject
        constructor(obj:restangular.IElement, protected Restangular:restangular.IService) {
            super(obj, Restangular);
        }
    }
}