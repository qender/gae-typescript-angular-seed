/// <reference path='../References.ts' />
module HigherMe.Models {
    export class RestangularElement implements restangular.IElement {
        constructor(obj:restangular.IElement, Restangular:restangular.IService) {
            angular.extend(this, obj);
        }

        public get(queryParams?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public getList(subElement?:any, queryParams?:any, headers?:any):restangular.ICollectionPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public put(queryParams?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public post(subElement:any, elementToPost:any, queryParams?:any, headers?:any):restangular.IPromise<any>;

        public post(elementToPost:any, queryParams?:any, headers?:any):restangular.IPromise<any>;

        public post(subElement:any, elementToPost:any, queryParams?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public remove(queryParams?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public head(queryParams?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public trace(queryParams?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public options(queryParams?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public patch(queryParams?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public clone(): restangular.IElement {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public plain(): any {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public withHttpConfig(httpConfig:restangular.IRequestConfig):restangular.IElement {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public save(queryParams?: any, headers?: any): restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public getRestangularUrl():string {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public customGET(path:string, params?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public customGETLIST(path:string, params?:any, headers?:any):restangular.ICollectionPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public customDELETE(path:string, params?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public customPOST(elem?:any, path?:string, params?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public customPUT(elem?:any, path?:string, params?:any, headers?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public customOperation(operation:string, path:string, params?:any, headers?:any,
                               elem?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public addRestangularMethod(name:string, operation:string, path?:string, params?:any, headers?:any,
                                    elem?:any):restangular.IPromise<any> {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public one(route:string, id?:number):restangular.IElement;

        public one(route:string, id?:string):restangular.IElement;

        public one(route:string, id?:any):restangular.IElement {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public oneUrl(route:string, url:string):restangular.IElement {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public all(route:string):restangular.IElement {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public allUrl(route:string, url:string):restangular.IElement {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public copy(fromElement:any):restangular.IElement {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public withConfig(configurer:(RestangularProvider:restangular.IProvider) => any):restangular.IService {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public restangularizeElement(parent:any, element:any, route:string, collection?:any,
                                     reqParams?:any):restangular.IElement {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public restangularizeCollection(parent:any, element:any, route:string):restangular.ICollection {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public service(route: string, parent: any): restangular.IService {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public stripRestangular(element:any):any {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }

        public extendModel(route: string, extender: (model: restangular.IElement) => any): void {
            console.log('Unimplemented function: problem with Restangular object');
            return null;
        }
    }
}
