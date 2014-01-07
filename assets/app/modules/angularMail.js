var AngularMailServices = angular.module('AngularMail', []);

function routeConfig($routeProvider) {
  $routeProvider
    .when('/', {
      controller: ListController,
      templateUrl: '/templates/list.html'
    })
    .when('/view/:id', {
      controller: ViewController,
      templateUrl: '/templates/view.html'
    })
    .otherwise({ redirectTo: '/' });
}

AngularMailServices.config(routeConfig);