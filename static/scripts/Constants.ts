module HigherMe {
    'use strict';
    export class Constants {
        public static APP_MODULE = "HigherMe";
        public static APP_CONTROLLERS_MODULE = Constants.APP_MODULE + ".controllers";
        public static APP_MODELS_MODULE = Constants.APP_MODULE + ".models";
        public static APP_DIRECTIVES_MODULE = Constants.APP_MODULE + ".directives";
        public static APP_SERVICES_MODULE = Constants.APP_MODULE + ".services";
        public static APP_FILTERS_MODULE = Constants.APP_MODULE + ".filters";
        public static APP_PARTIALS_MODULE = Constants.APP_MODULE + ".partials";
        public static API_BASE_URL = "/_ah/api/higherme/v1";
    }
}