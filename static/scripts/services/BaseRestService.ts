/// <reference path='../References.ts' />
module HigherMe.Services {
    'use strict';
    export class BaseRestService<T> {
        constructor(public Restangular:restangular.IService, public resourceType:string) {
            this.resourceType = resourceType;
        }

        public getAll(queryParams?:any):restangular.ICollectionPromise<T> {
            return this.Restangular.all(this.resourceType).getList(queryParams);
        }

        public getById(id, queryParams?:any):restangular.IPromise<T> {
            return this.Restangular.one(this.resourceType, id).get(queryParams)
        }

        public getOne(queryParams?:any):restangular.IPromise<T> {
            return this.Restangular.one(this.resourceType).get(queryParams);
        }

        public post(resource, data):restangular.IPromise<T> {
            return this.Restangular.one(this.resourceType).post(resource, data);
        }
    }
}